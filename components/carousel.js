import { Box, Flex } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { pb } from "../utils/pb";
import { compileString } from "sass";

export default function ScrollImages() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isReadyBlocks, setIsReady] = useState(false)
    const [data, setData] = useState([])
    //const [images, setImages] = useState([])
    const [imageBlocks, setImageBlocks] = useState([])

    // запрашиваем данные по спонсорам
    useEffect(() => {
        async function fetchDataCarousel() {
            try {
                const sponsorData = await pb.collection('sponsorBrands').getFullList({
                    sort: '-created',
                })
                console.log("sponsorData: ", sponsorData)
                setData(await JSON.parse(JSON.stringify(sponsorData)))
                setIsLoaded(true)
            } catch (err) {
                console.log("car err: ", err)
                return err
            }
        }


        fetchDataCarousel()
    }
        , [])

    // после получения данных по спонсорам создаем images компоненты (думаю можно потом все в 1 useEffect воткнуть)
    useEffect(() => {
        console.log("user 2 data: ", data)
        console.log("ready: ", isReadyBlocks)
        const result = []
        data.forEach((e) => {
            result.push(
                <div className="carousel_item">
                    <p className="carousel_title">123 + logopicture</p>
                    <div className="carousel_text">All-new strikingly thin
                        design so you can work
                    </div>
                </div>)
        })
        setImageBlocks([...result])
        setIsReady(true)

    }, [isLoaded]);


    const ref = useRef(null)

    // Горизонтальная длина одного изображения
    const itemWidth = 240
    // Отступ между изображениями
    const gap = 24
    // Ширина изображения и общее расстояние между изображениями
    const itemWidthWithGap = itemWidth + gap
    // Количество изображений
    const numberOfContents = imageBlocks.length
    // общая последовательность горизонтальных изображений
    //const [imageBlocks, setImageBlocks] = useState(images)

    useEffect(() => {
        // ``Заполнить ширину''
        // Если количество содержимого меньше длины окна
        // Зациклить изображения (последовательность) и расположить их так, чтобы ширина < всего длина изображений Добавить,
        if (
            ref.current?.offsetWidth &&
            imageBlocks.length * itemWidthWithGap < ref.current.offsetWidth
            && imageBlocks.length > 0
        ) {
            // Сколько частей не хватает до общей длины?
            const fillableNumberOfContents = Math.floor(
                (ref.current.offsetWidth - imageBlocks.length * itemWidthWithGap) /
                numberOfContents
            )

            // Сколько последовательностей необходимо добавить?
            const fillableNumberOfSequence = Math.ceil(
                fillableNumberOfContents / numberOfContents
            )

            //Последовательность минут Добавить содержание
            const newimageBlocks = [...imageBlocks]
            const _ = [...Array(fillableNumberOfSequence)].map((_, index) => {
                newimageBlocks.push(...imageBlocks)
            })

            setImageBlocks(newimageBlocks)
        }
        console.log(imageBlocks);
        
    }, [ref.current]) //Выполняется в момент рендеринга DOM и определения ширины.

    // TODO вот это значение всегда []
    console.log("image: ", imageBlocks)
    return (
        (isReadyBlocks && imageBlocks.length > 0)
            ? (<Box
                alignItems="center"
                w="full"
                position="relative"
                mx={'auto'}
                overflow="hidden"
                ref={ref}
            >
                <AnimatePresence>
                    <motion.div
                        // Окончательная разность перемещений в конце смены анимации.
                        animate={{
                            x: itemWidthWithGap,
                        }}
                        // Описывает, как изменяется начальное состояние на Animation.
                        transition={{
                            repeat: Infinity, //цикл
                            duration: 5, //　Время завершения анимации (секунды)
                            ease: 'linear', // Метод изменения. Линейное изменение.
                        }}
                        onUpdate={(latest) => {
                            if (latest.x >= itemWidthWithGap) {
                                //Лечение срабатывает после перемещения на одну клетку.
                                const newimageBlocks = [...imageBlocks]
                                newimageBlocks.unshift(imageBlocks[imageBlocks.length - 1]) //Добавьте в начало изображение, идущее следом.
                                newimageBlocks.pop() //Стереть изображение терминала.
                                setImageBlocks(newimageBlocks) //Адаптация модифицированных последовательностей.
                            }
                        }}
                    >
                        <Box>{imageBlocks.length}</Box>
                        <Flex
                            gap={6}
                            w={`${itemWidthWithGap * imageBlocks.length}px`}
                            ml={`-${itemWidth}px`}
                        >
                            <Box>{imageBlocks.length}</Box>
                            {imageBlocks.map((block, index) => {
                                return (
                                    <Box
                                        key={index}
                                        w={`${itemWidth}px`}
                                        h={`${itemWidth}px`}
                                        position="relative"
                                    >
                                        
                                        {block}
                                    </Box>
                                )
                            })}
                        </Flex>
                    </motion.div>
                </AnimatePresence>
            </Box>)
            : (<p>Загрузка...{imageBlocks.length} {imageBlocks.length > 0}</p>)

    )
}
