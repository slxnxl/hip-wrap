import { Box, Center, Container, Flex, Stack, Tab, TabList, Tabs } from "@chakra-ui/react";
import React from "react";
import {pb} from "../utils/store"
import {useEffect} from "react";
import PocketBase from 'pocketbase';


export default function FilterButton(props) {
  useEffect( () => {
    async function fetchData() {
      try {const records = await pb?.collection('services').getFullList({
        sort: '-created',
      });
      console.log('records : ', records);}
      catch {
        console.log(err);
      }
  }
  fetchData();
}, []);

  const setTarget = props.setTarget;
  // const tabs = records.forEach(element => {
    
  // });
 
  return (
    <Container maxW='1000'>
      <Center mb={3}>
        <Tabs variant='unstyled' colorScheme='blackAlpha' onChange={(index) => setTarget(index)}>
          <TabList>
            <Flex wrap="wrap">
              <Tab _selected={{ color: 'white', bg: 'black' }}>все</Tab>
              <Tab _selected={{ color: 'white', bg: 'black' }}>пленка</Tab>
              <Tab _selected={{ color: 'white', bg: 'black' }}>детейлинг</Tab>
              <Tab _selected={{ color: 'white', bg: 'black' }}>ремонт</Tab>
              <Tab _selected={{ color: 'white', bg: 'black' }}>оборудование</Tab>
              {/*<Tab _selected={{ color: 'white', bg: 'black' }}>химчистка</Tab>*/}
              {/*<Tab _selected={{ color: 'white', bg: 'black' }}>винил</Tab>*/}
              {/*<Tab _selected={{ color: 'white', bg: 'black' }}>полировка</Tab>*/}
              {/*<Tab _selected={{ color: 'white', bg: 'black' }}>керамика</Tab>*/}
              {/*<Tab _selected={{ color: 'white', bg: 'black' }}>химчистка</Tab>*/}
            </Flex>
          </TabList>
        </Tabs>
      </Center>
    </Container>
  )
}

// Список категорий
//(Пленка)
// Антигравийная защита
// Винил
// Дизайн
// Брендирование
// Тонировка
// Бронирование стекол
// (Детейлинг)
// Полировка
// Керамика
// Химчистка
// Восстановление кожи
// (Ремонт)
// Выпрямление вмятин (пдр)
// Покрас
// Ремонт стекол
// Перешив салона
// (Доп оборудование)
// Подсветка
// Выхлопная система
// Доводчики/пороги
// Шумоизоляция
// Аудиосистема
// Замена аксессуаров
