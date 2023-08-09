import { AspectRatio, Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Suspense, useState } from "react";

export default function BlockGrid({ project }) {
  const [load, setLoad] = useState(false);
  const handleChange = () => {
    setLoad(!load);
  };
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
      <Image
        layout="fill"
        onLoadingComplete={setLoad(true)}
        objectFit="cover"
        quality={100}
        alt={project.name}
        src={`https://better-autumn.pockethost.io/api/files/${project.collectionId}/${project.id}/${project.main_image}`}
      ></Image>
      {!load && <Loading />}
    </Box>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
