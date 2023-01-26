import { AspectRatio, Box, Text } from "@chakra-ui/react";


export default function BlockGrid({ project }) {
  const flex_size = project?.flex_size
  let height_size = project?.height_size
  const height = 123
  //TODO грузить видео 1 раз + кэшировать
  if (project?.video === true) {
    return (
      <Box
        as="video"
        src='/test_mute.mp4'
        objectFit='cover'
        muted={true}
        autoPlay={true}
        playsinline={true}
        loop={true}
        overflow='hidden'
        flex={flex_size}
        height={height_size}
        mb={1}>
      </Box>
      // <video width="400" height="300" playsinline="playsinline" muted="muted" autoplay="autoplay" loop="loop">
      //   <source src="test_mute.mp4" type='video/mp4; codecs="theora, vorbis"' />
      // </video>
      // <div>
      //   <video playsinline muted autoplay loop width="250" src="test_mute.mp4"></video>
      // </div>
    )
  }
  else {
    return (
      <Box
        overflow='hidden'
        backgroundImage="url('/project_2.jpg')"
        backgroundPosition="center"
        bgSize='cover'
        flex={flex_size}
        height={height_size}
        mb={1}
        className="image_box"
      >
        <Text>hello</Text>
      </Box>
    )
  }
}