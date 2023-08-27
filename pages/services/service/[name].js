// конкртетно по услуге страница 
// https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes
// https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths

import {Box, Button, List, ListIcon, ListItem, Text} from "@chakra-ui/react";
import {
    MdCheckCircle,
    MdGrade,
    MdHotelClass,
    MdAutoAwesome,
    MdDirectionsCarFilled,
    MdDirectionsCar,
    MdStar,
    MdFlashOn
} from "react-icons/md";
import Complex from "../complex";
import React from "react";
import Image from "next/image";

export default function Service() {

    const items = [
        "защита от  сколов, царапин, химических веществ, ультрафиолета, коррозии, реагентов, перепадов температур",
        "прозрачная, не меняет цвет авто",
        "в наличии матовое и глянцевое покрытие, что позволяет улучшить текстуру, обеспечив при этом надежную защиту",
        "защита ЛПК от выцветания",
        "не желтеет на протяжении всего срока службы",
        "гидрофобный эффект - отталкивает воду и грязь",
        "придает идеальный блеск",
        "сохраняет кузов в новом состоянии",
    ]

    const complex = [1, 1, 1, 1, 1]

    return (
        <Box className="service">
            {/*описание услуги*/}
            <Box className="service_description">
                <Text>
                    Купили новый автомобиль и боитесь повредить кузов?<br/>
                    Наши дороги, погодные условия, цены на покраску и ремонт держат вас в постоянном
                    напряжении?<br/><br/>

                    Теперь у вас есть возможность не переживать за сохранность внешнего вида своего авто.<br/><br/>

                    Бронируйте автомобиль инновационным материалом, созданным для военных целей - полиуретановой
                    пленкой.<br/>
                </Text>
            </Box>
            {/*Преимущества*/}
            <Box className="service_section">
                <Text>Преимущества антигравийной полиуретановой пленки</Text>

                <Box className="service_section-block">
                    <List spacing={3} className="service_list service_section-list">
                        {items.map((item, index) => {
                            return (
                                <ListItem className="service_item" style={{animationDelay: `${0.25 * (index + 1)}s`}}
                                          key={index}>
                                    <ListIcon as={MdDirectionsCarFilled} color='#805AD5'/>
                                    {item}
                                </ListItem>)
                        })}
                    </List>

                    <Box className="service_section-img">
                        {/*<Image  className="service_img" src={'/project_1.jpg'} alt="logo" width="100%" height="100%" objectFit='cover' />*/}
                    </Box>
                </Box>
            </Box>
            {/*Почему у нас*/}
            <Box className="service_section">
                <Text>Почему нужно заказать услугу у нас?</Text>
                <Box className="service_section-block">
                    <Box className="service_section-img">
                        {/*<Image  className="service_img" src={'/project_1.jpg'} alt="logo" width="100%" height="100%" objectFit='cover' />*/}
                    </Box>

                    <List spacing={3} className="service_list">
                        {items.map((item, index) => {
                            return (
                                <ListItem className="service_item" style={{animationDelay: `${0.25 * (index + 1)}s`}}
                                          key={index}>
                                    <ListIcon as={MdAutoAwesome} color='#805AD5'/>
                                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                                </ListItem>)
                        })}
                    </List>
                </Box>
            </Box>
            {/*Комлекс*/}
            <Box>
                <Text>Комлекс намного выгоднее!</Text>
                {complex.map((item, index) => {
                    return (
                        <Box key={index}>
                            <Complex/>
                        </Box>
                    )
                })}
                <Text>Специальное предложение</Text>
                <Text>
                    Только этим летом<br/><br/>

                    Комплекс 3: в подарок два внутренних порога или выгружная полоса
                    Комплекс 4: в подарок внутренние пороги и стойки дверей
                </Text>
            </Box>
            {/*АКЦИЯ*/}
            <Box>
                <Text>АКЦИЯ</Text>
                <Text>При бронировании капота скидка на бронь фар 50% или полоса над лобовым стеклом в подарок</Text>

            </Box>
            {/*кнопки*/}
            <Box>
                <Button
                    zIndex={1}
                    bg='#3F3EC2'
                    color='#fff'
                    boxShadow='0 0 4px #fff'>
                    ЗАКАЗАТЬ УСЛУГУ
                </Button>
                <Button
                    zIndex={1}
                    bg='#3F3EC2'
                    color='#fff'
                    boxShadow='0 0 4px #fff'>
                    ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
                </Button>

            </Box>
            {/*отзывы*/}
            <Box>

            </Box>
        </Box>
    )
}