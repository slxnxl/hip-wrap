import {AspectRatio, Box, Text} from "@chakra-ui/react";


export default function BlockGrid ({project}) {
    let flex_size = project.flex_size
    let height_size = project.height_size
    //TODO грузить видео 1 раз + кэшировать
    if (project.video === true) {
        return (<Box
            as="video"
            src='/test.webm'
            objectFit='cover'
            loop="true"
            autoplay="true"
            muted="true"
            overflow='hidden'
            flex={flex_size}
            height={height_size}
            mb={1}>
        </Box>)
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
            >
                <Text>hello</Text>
            </Box>
        )
    }
}