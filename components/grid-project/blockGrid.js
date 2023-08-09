'use client'
import { AspectRatio, Box, Text, Skeleton } from "@chakra-ui/react";
import Image from "next/image";
import { Suspense, useState } from "react";

export default function BlockGrid({ project }) {
  const [load, setLoad] = useState(false);
  console.log("load ", project.name, " ", load); 
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
      overflow={false}
      w="100%"
      h="100%"
      className="image_box"
      display={"flex"}
    >
      <Skeleton isLoaded={load}  startColor='pink.500' endColor='orange.500'  height='100px'>
        <Image
          layout="fill"
          onLoadingComplete={(e)=> setLoad(true)}
          objectFit="cover"
          quality={100}
          alt={project.name}
          loading="lazy"
          src={`https://better-autumn.pockethost.io/api/files/${project.collectionId}/${project.id}/${project.main_image}`}
        ></Image>
      </Skeleton>
    </Box>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
