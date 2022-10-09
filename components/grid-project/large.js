import {Box} from "@chakra-ui/react";


export default function Large ({project}) {
    let flex_size = project.flex_size
    let height_size = project.height_size
    // TODO заменить цвет на изображение
    return (
        <Box bg={project.color}
             flex={flex_size}
             height={height_size}
        >
                <p>large block</p>
        </Box>
    )
}