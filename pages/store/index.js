import React from "react";
import {
    Box,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Flex,
    Heading,
    SimpleGrid,
    Stack,
    Text,
    useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import {pb} from "../../utils/pb";
import ContactUSBtnInStore from "../../components/storeModalBtn";

export default function Store(props) {
  const isMobile = useMediaQuery("(max-width: 640px)");

  console.log("propsss", props);
  return isMobile[0] === true ? (
    <Flex direction={"column"}>
      {props.store.data.map((item, index) => (
        <Card key={index} maxW="sm" margin={3}>
          <CardBody>
            <Box position={"relative"} height="300px">
              <Image
                layout={"fill"}
                src={`https://better-autumn.pockethost.io/api/files/${item.collectionId}/${item.id}/${item.image}`}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
            </Box>
            <Stack mt="6" spacing="3">
              <Heading size="md">{item.name}</Heading>
              {item.params.params.map((par) => {
              console.log("item", item);
              return (
                <Text key={par.id}>
                  {par.name} - {par.value}
                </Text>
              );
            })}
              <Text>{item.text}</Text>
              <Text color="blue.600" fontSize="2xl">
                {item.price.value} {item.price.type}
              </Text>
            </Stack>
          </CardBody>
          <Divider width={"95%"} margin={"0 auto"} />
          <CardFooter>
            <ContactUSBtnInStore product={item}>Заказать</ContactUSBtnInStore>
          </CardFooter>
        </Card>
      ))}
    </Flex>
  ) : (
    <SimpleGrid margin={10} columns={2} spacing={10}>
      {props.store.data.map((item, index) => (
        <Card key={index} maxW="sm">
          <CardBody>
            <Box position={"relative"} height="300px">
              <Image
                layout={"fill"}
                src={`https://better-autumn.pockethost.io/api/files/${item.collectionId}/${item.id}/${item.image}`}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
            </Box>
            <Stack mt="6" spacing="3">
              <Heading size="md">{item.name}</Heading>
              {item.params.params.map((par) => {
              console.log("item", item);
              return (
                <Text key={par.id}>
                  {par.name} - {par.value}
                </Text>
              );
            })}
              <Text>{item.text}</Text>
              <Text color="blue.600" fontSize="2xl">
                {item.price.value} {item.price.type}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ContactUSBtnInStore product={item}>Заказать</ContactUSBtnInStore>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
}

export async function getStaticProps() {
  try {
    const getRecords = await pb?.collection("store").getFullList({
      sort: "-created",
    });
    // TODO по идее можно переделать без JSON
    const data = JSON.parse(JSON.stringify(getRecords));
    //data.unshift({ id: 0, name: "все" });
    console.log("data: ", data);
    return {
      props: {
        // TODO упростить представление потом
        store: { data },
      }, // will be passed to the page component as props
    };
  } catch (err) {
    console.log("err: ", err);
    return err;
  }
}
