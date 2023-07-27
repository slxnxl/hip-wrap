import { Box, Center, Container, Flex, Stack, Tab, TabList, Tabs } from "@chakra-ui/react";
import React, { useState } from "react";
import {useEffect} from "react";


// export async function getStaticProps() {
//   // Получаем данные с внешнего API
//   // Можно использовать любую библиотеку для получения данных.
//   try { const getRecords = await pb?.collection('services').getFullList({
//             sort: '-created',
//           })
//           console.log('records : ', getRecords)
//           const posts = await getRecords.json()
//           return {
//             props: {
//               posts,
//             },
//           }}
//           catch {
//             console.log("error filter btn data rec: ",err)
//           }
//   // Эта функция возвращает объект c объектом props.
//   // который в свою очередь будет передан в компонент Blog(код которого описан выше)

// }

// TODO настроить загрузку данных с бд
export default function FilterButton({func, data}) {

// TODO переделать таргет на id с бд
  const setTarget = func;
  console.log("в компоненте FilterButton : ",func)
  console.log("data filter data: ", data)
  // console.log("posts2: ", getRecords)
  const tabs = data.map((element) => {
  //   // console.log("t: ", element.name)
    // element.name
    return <Tab _selected={{ color: 'white', bg: 'black' }}>{element.name}</Tab>
  })

  // console.log("tabs: ", tabs())
 
  return (
    <Container maxW='1000'>
      <Center mb={3}>
        <Tabs variant='unstyled' colorScheme='blackAlpha' onChange={(index) => setTarget(index)}>
          <TabList>
            <Flex wrap="wrap">
              {tabs}
              {/* {/* <Tab _selected={{ color: 'white', bg: 'black' }}>все</Tab> */}
              <Tab _selected={{ color: 'white', bg: 'black' }}>пленка</Tab>
              <Tab _selected={{ color: 'white', bg: 'black' }}>детейлинг</Tab>
              <Tab _selected={{ color: 'white', bg: 'black' }}>ремонт</Tab>
              <Tab _selected={{ color: 'white', bg: 'black' }}>оборудование</Tab>
            </Flex>
          </TabList>
        </Tabs>
      </Center>
    </Container>
  )
}
