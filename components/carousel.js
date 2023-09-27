import {Box, Flex} from '@chakra-ui/react'
import {AnimatePresence, motion} from 'framer-motion'
import {useEffect, useRef, useState} from 'react'
import {pb} from "../utils/pb";
import {compileString} from "sass";

export default function ScrollImages() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
            async function fetchDataCarousel() {
                if (!isLoaded) {
                    try {
                        const sponsorData = await pb.collection('sponsorBrands').getFullList({
                            sort: '-created',
                        })
                        console.log("sponsorData: ", sponsorData)
                        await setData(JSON.parse(JSON.stringify(sponsorData)))
                        const result = []
                        console.log("data in carusel: ", data)
                        data.forEach((e) => {
                            result.push(
                                <div className="carousel_item">
                                    <p className="carousel_title">123 + logopicture</p>
                                    <div className="carousel_text">All-new strikingly thin
                                        design so you can work
                                    </div>
                                </div>)
                        })
                        console.log("image: ", result)
                        setImages(result)
                        setIsLoaded(true)
                    } catch (err) {
                        console.log("car err: ", err)
                        return err
                    }
                }
            }

            fetchDataCarousel()
        }
        , [])
    console.log("data carusel last: ", data)
    // const [images, setImages] = useState(() => {
    //
    //
    //     const result = []
    //     result.push(
    //         <div className="carousel_item">
    //             <p className="carousel_title">Brand name + logopicture</p>
    //             <div className="carousel_text">All-new strikingly thin
    //                 design so you can work
    //             </div>
    //         </div>
    //     )
    //
    //     return result
    // })
    const [images, setImages] = useState([])
    const ref = useRef(null)

    // Горизонтальная длина одного изображения
    const itemWidth = 240
    // Отступ между изображениями
    const gap = 24
    // Ширина изображения и общее расстояние между изображениями
    const itemWidthWithGap = itemWidth + gap
    // Количество изображений
    const numberOfContents = images.length
    // общая последовательность горизонтальных изображений
    const [imageBlocks, setImageBlocks] = useState(images)

    useEffect(() => {
        // ``Заполнить ширину''
        // Если количество содержимого меньше длины окна
        // Зациклить изображения (последовательность) и расположить их так, чтобы ширина < всего длина изображений Добавить,
        if (
            ref.current?.offsetWidth &&
            imageBlocks.length * itemWidthWithGap < ref.current.offsetWidth
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
    }, [ref.current]) //Выполняется в момент рендеринга DOM и определения ширины.


    return (<>
        { (!isLoaded) ? <p>Загрузка...</p> :
        <>
            <Box
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
                        <Flex
                            gap={6}
                            w={`${itemWidthWithGap * imageBlocks.length}px`}
                            ml={`-${itemWidth}px`}
                        >
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
            </Box>
        </>
}</>
    )
}
