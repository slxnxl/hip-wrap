import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";
//import Image from "next/image";
import "react-image-gallery/styles/css/image-gallery.css";
import { useEffect, useState } from "react";
import { Plug } from "./grids";
import { pb } from "../utils/pb";

export default function ModalProjectView({ project }) {
  const [isLoad, setIsLoad] = useState(false);
  const [tags, setTags] = useState([])

  //console.log("project in ModalProjectView", project.images);
  
  const images = [];
  project.images.forEach((image) => {
    images.push({
      original: `https://better-autumn.pockethost.io/api/files/projects/${project.id}/${image}`,
      thumbnail: `https://better-autumn.pockethost.io/api/files/projects//${project.id}/${image}`,
    });
  });
  // функция для загрузки первого изображения, пока крутится лоадер
  (function loading () {
    const a = new Image()
    a.src = images[0].original
    try {a.onload = () => setIsLoad(true)}
    catch (e) {
      console.log(e);
    }
    
    } )()
  
  useEffect( () => {
    async function fetchData() {

      const response = await pb?.collection("services").getFullList({
            sort: "-created",
          });

      const flterRec = await response.filter((record) =>  project.listservices.includes(record.id));
          console.log("flterRec", flterRec);

      setTags([...flterRec])
    }
    fetchData();
  }, [])

  console.log("tags", tags);

  const tabsTags = tags.map((element) => {
    return (
      <Tag
      key={element.id}
        marginTop={"5px"}
        size={"md"}
        borderRadius="full"
        variant="solid"
        colorScheme="gray"
      >
        <TagLabel>{element.name}</TagLabel>
      </Tag>
    );
  });

  console.log("tags", tags);
  //project.
  return (
    <>
      {/*//<Card maxW='lm' direction={{ base: 'column', sm: 'row' }}>*/}
      {/*//<Card maxW='lm' maxH='md'>*/}
      {/*<CardBody>*/}
      {/*<Image
     width="500px"
     height="500px"
      src="https://better-autumn.pockethost.io/api/files/lnto5n3zycdk3cm/r5jdlfc5tkrzzo7/project_2_AWhRimGYt9.jpg"
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />*/}
    {!isLoad ? <Plug /> :
    <ImageGallery
      items={images}
      showThumbnails={false}
      showPlayButton={false}
      showThumbnails={false}
      lazyLoad={true}
      onImageLoad={(e) => setIsLoad(true)}
    />
  }
      {/*<ImageGallery
        items={images}
        showThumbnails={false}
        showPlayButton={false}
        showThumbnails={false}
        lazyLoad={true}
        //onImageLoad={(e) => setIsLoad(true)}
      />*/}

      {/*//  </CardBody>*/}
      {/*<Divider paddingBottom="10px" />*/}
      {/*//  <CardFooter>*/}
      {tabsTags}
      <Tag
        marginTop={"5px"}
        size={"md"}
        borderRadius="full"
        variant="solid"
        colorScheme="black"
      >
        <TagLabel>Green</TagLabel>
      </Tag>

      {/*//  </CardFooter>*/}
      {/*//</Card>*/}
    </>
  );
}
