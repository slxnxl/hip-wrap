import {Box, Img, Text} from "@chakra-ui/react";


export default function BlockGrid ({project}) {
    let flex_size = project.flex_size
    let height_size = project.height_size
    // TODO заменить цвет на изображение
    return (
        <Box
             backgroundImage="url('/project_3.jpg')"
             backgroundPosition="center"
             flex={flex_size}
             height={height_size}
             background-image='/project_1.jpg'
             mb={1}
        >
            <Text>hello</Text>
        </Box>
    )
}