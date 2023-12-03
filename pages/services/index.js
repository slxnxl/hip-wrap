// посадочная страница

import {
    Box,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Heading,
    List,
    ListIcon,
    ListItem,
    Text,
    useMediaQuery,
    Wrap,
    WrapItem,
} from "@chakra-ui/react";
import {MdDirectionsCarFilled,} from "react-icons/md";
import React from "react";
import Image from "next/image";
import FilterButton from "../../components/filterButton";
import {pb} from "../../utils/pb";
//import SliderServises from "../../components/sliderServises";

//сюда статик пропс

// конкртетно по услуге страница
// https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes
// https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths

export default function Service(props) {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [target, setTarget] = React.useState(0);
  //const pointValues = props.servises.data[target].pointText;
  //console.log("pointValues ", pointValues);
  //console.log("props ", props);
  return (
    <>
      <FilterButton func={setTarget} data={props.servises.data}></FilterButton>
      {/*<Box><Flex direction={"row"}><SliderServises></SliderServises></Flex> </Box>*/}
      <Box className="service">
        <Heading as="h1" size="2xl" mb={5}>
          {props.servises.data[target].name}
        </Heading>
        {/*описание услуги*/}
        <Box className="service_description">
          <Text>{props.servises.data[target].textOne}</Text>
        </Box>
        <Flex direction="row" gap={3} height="400px">
          <Box flex="1" position={"relative"} overflow={false}>
            {" "}
            <Image
              src={`https://better-autumn.pockethost.io/api/files/${props.servises.data[target].collectionId}/${props.servises.data[target].id}/${props.servises.data[target].firstImage}`}
              layout="fill"
              //height={"100%"}
              //width={"100%"}
              objectFit="cover"
              alt="a123"
            ></Image>
          </Box>
          {isMobile[0] == false && (
            <Box flex="1" position={"relative"}>
              <Image
                src={`https://better-autumn.pockethost.io/api/files/${props.servises.data[target].collectionId}/${props.servises.data[target].id}/${props.servises.data[target].secondImage}`}
                layout="fill"
                objectFit="cover"
                alt="a123"
              ></Image>
            </Box>
          )}
        </Flex>

        {/*Преимущества*/}
        <Box className="service_section">
          <Heading as="h2" size="xl" mt={5}>
            {props.servises.data[target].firstTitle}
          </Heading>
          <Box className="service_description2">
            <Text>{props.servises.data[target].textTwo}</Text>
          </Box>

          {!isMobile[0] ? (
            <Box flex="1" className="service_section-block">
              <List spacing={3} className="service_list service_section-list">
                {props.servises.data[target]?.pointText?.pointers.map(
                  (item, index) => {
                    return (
                      <ListItem
                        className="service_item"
                        style={{ animationDelay: `${0.25 * (index + 1)}s` }}
                        key={index}
                      >
                        <ListIcon as={MdDirectionsCarFilled} color="#805AD5" />
                        {item.value}
                      </ListItem>
                    );
                  }
                )}
              </List>
              {/*<Box className="service_section-img">*/}
              <Box
                flex="0.7"
                position={"relative"}
                overflow={false}
                minHeight={"400px"}
              >
                <Image
                  src={
                    //TODO сюда третью картинку 
                    "https://better-autumn.pockethost.io/api/files/4qhxhx8je8gzimb/3frg08vtw195lqv/photo_2023_10_19_01_25_58_hn7wHAdzyN.jpg"
                  }
                  layout="fill"
                  objectFit="cover"
                  alt="a123"
                ></Image>
                {/*</Box>*/}
                {/*<Image  className="service_img" src={'/project_1.jpg'} alt="logo" width="100%" height="100%" objectFit='cover' />*/}
              </Box>
            </Box>
          ) : (
            <Flex direction="column" gap={3}>
              <Box>
                <List spacing={3} className="service_list service_section-list">
                  {props.servises.data[target]?.pointText?.pointers.map((item, index) => {
                    return (
                      <ListItem
                        className="service_item"
                        style={{ animationDelay: `${0.25 * (index + 1)}s` }}
                        key={index}
                      >
                        <ListIcon as={MdDirectionsCarFilled} color="#805AD5" />
                        {item.value}
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
              <Box position={"relative"} height={"400px"} overflow={false}>
                <Image
                  src={
                    "https://better-autumn.pockethost.io/api/files/4qhxhx8je8gzimb/3frg08vtw195lqv/photo_2023_10_19_01_25_58_hn7wHAdzyN.jpg"
                  }
                  layout="fill"
                  //height={"100%"}
                  //width={"100%"}
                  objectFit="cover"
                  alt="a123"
                ></Image>
              </Box>
            </Flex>
          )}
        </Box>
        {/*Почему у нас*/}
        {/*</Box>*/}
        {/*Комлекс*/}
        {props.servises.data[target]?.complex !== null &&
        <Heading as="h2" size="xl" mt={5}>
          Комплекс - выгоднее!
        </Heading>}
        {props.servises.data[target]?.complex !== null &&
        <Wrap
          gap={10}
          margin={"0, auto"}
          marginTop={10}
          justify="center"
          spacing="30px"
        >
          {props.servises.data[target]?.complex.complexes.map((item, index) => {
            return (
              <WrapItem key={index} maxWidth={"500px"}>
                <Card color="white" bgColor="#3F3EC2" size={"lg"}>
                  <CardHeader>
                    <Heading size="md">{item.title}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>{item.value}</Text>
                  </CardBody>
                  <CardFooter>
                  <Text fontSize="36px" as='del' color="tomato">
                     {item.oldPrice}
                    </Text>
                    <Text fontSize="50px" color="tomato">
                     {item.price}
                    </Text>
                  </CardFooter>
                </Card>
              </WrapItem>
            );
          })}
        </Wrap>
}
      </Box>
    </>
  );
}

export async function getStaticProps() {
  try {
    const getRecords = await pb?.collection("services").getFullList({
      sort: "-created",
    });
    // TODO по идее можно переделать без JSON
    const data = JSON.parse(JSON.stringify(getRecords));
    //data.unshift({ id: 0, name: "все" });
    //console.log("data: ", data);
    return {
      props: {
        // TODO упростить представление потом
        servises: { data },
      }, // will be passed to the page component as props
    };
  } catch (err) {
    console.log("err: ", err);
    return err;
  }
}
