import { Card, CardBody, CardFooter, Divider, Tag, TagLabel } from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";
import Image from "next/image";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
      original: "https://better-autumn.pockethost.io/api/files/lnto5n3zycdk3cm/r5jdlfc5tkrzzo7/project_2_AWhRimGYt9.jpg",
      thumbnail: "https://better-autumn.pockethost.io/api/files/lnto5n3zycdk3cm/r5jdlfc5tkrzzo7/project_2_AWhRimGYt9.jpg",
    },
    {
      original: "https://better-autumn.pockethost.io/api/files/lnto5n3zycdk3cm/r5jdlfc5tkrzzo7/project_2_AWhRimGYt9.jpg",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://better-autumn.pockethost.io/api/files/lnto5n3zycdk3cm/r5jdlfc5tkrzzo7/project_2_AWhRimGYt9.jpg",
      thumbnail: "https://better-autumn.pockethost.io/api/files/lnto5n3zycdk3cm/r5jdlfc5tkrzzo7/project_2_AWhRimGYt9.jpg",
    },
  ];

export default function ModalProjectView() {

    return (
    <Card maxW='lm' direction={{ base: 'column', sm: 'row' }}>
  <CardBody>
    {/*<Image
     width="500px"
     height="500px"
      src="https://better-autumn.pockethost.io/api/files/lnto5n3zycdk3cm/r5jdlfc5tkrzzo7/project_2_AWhRimGYt9.jpg"
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />*/}
    <ImageGallery items={images} />;
    
  </CardBody>
  <Divider />
  <CardFooter>
  <Tag
      size={"md"}
    //  key={size}
      borderRadius='full'
      variant='solid'
      colorScheme='green'
    >
      <TagLabel>Green</TagLabel>
    </Tag>
  </CardFooter>
</Card>
    )
}
