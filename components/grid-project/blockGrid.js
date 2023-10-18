"use client";
import { AspectRatio, Box, Text, Skeleton } from "@chakra-ui/react";
import Image from "next/image";
import { Suspense, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { LayoutGroup, motion, AnimatePresence } from "framer-motion";


export default function BlockGrid({ isPhotoLoaded, project,  onOpen}) {
  const [load, setLoad] = useState(false);
  //console.log("load ", project.name, " ", load);
  return project?.video === true ? (
    <Box
      as="video"
      src="/test_mute.mp4"
      objectFit="cover"
      muted={true}
      autoPlay={true}
      playsinline={true}
      loop={true}
      overflow="hidden"
      flex={1}
      height={"100px"}
      mb={1}
    ></Box>
  ) : (
    // <video width="400" height="300" playsinline="playsinline" muted="muted" autoplay="autoplay" loop="loop">
    //   <source src="test_mute.mp4" type='video/mp4; codecs="theora, vorbis"' />
    // </video>
    // <div>
    //   <video playsinline muted autoplay loop width="250" src="test_mute.mp4"></video>
    // </div>
    
    <Box
      //as={motion.div}
      //layoutId={project.id}
      //onClick={() => {indexAnimate === false && setIndexAnimate(project.id)}}
      onClick={onOpen}
      initial={{ borderRadius: "0.6rem" }}
      overflow={false}
      w="100%"
      h="100%"
      className="image_box"
    >
      {!load && <Plug />}
      
       <Image
          layout="fill"
          onLoadingComplete={(e) => setLoad(true)}
          objectFit="cover"
          quality={100}
          alt={project.name}
          priority
          //fill={'true'}
          //loading="lazy"
          src={`https://better-autumn.pockethost.io/api/files/${project.collectionId}/${project.id}/${project.main_image}`}
        ></Image>
     
    </Box>
  );
}


// https://codesandbox.io/s/framer-motion-image-gallery-pqvx3?from-embed
// как сделать галерею

function Plug() {
  // Вот сюда gif с загрузкой
  return (
    <Player
      autoplay
      loop
      src="https://lottie.host/3f1693db-8d00-4440-b0f4-54b46ba57620/uc8D8CHXxb.json"
      style={{ height: "100%", backgroundColor: "#F3F5F8" }}
    />
  );
}

