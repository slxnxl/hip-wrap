

// TODO create grid projects

import {Box, Flex} from "@chakra-ui/react";
import Large from "./grid-project/large";

export default function Grids ({ projects }) {
    //TODO test data, delete later
    let project1 = {
        'flex_size' : '0.6',
        'height_size' : '70vh',
        'color' : 'blue'
    }
    let project2 = {
        'flex_size' : '0.4',
        'height_size' : '70vh',
        'color' : 'tomato'
    }
    let project3 = {
        'flex_size' : '0.4',
        'height_size' : '70vh',
        'color' : 'black'
    }
    let project4 = {
        'flex_size' : '0.5',
        'height_size' : '40vh',
        'color' : 'black'
    }
    let project5 = {
        'flex_size' : '0.5',
        'height_size' : '40vh',
        'color' : 'tomato'
    }
    let project6 = {
        'flex_size' : '0.4',
        'height_size' : '40vh',
        'color' : 'green'
    }
    let project7 = {
        'flex_size' : '0.4',
        'height_size' : '40vh',
        'color' : 'yellow'
    }

    return (
        // Template flexbox
        <Box>
            <Flex justify-content={"space-around"} maxW="100%" gap={1}>
                <Large project={project1}></Large>
                <Large project={project2}></Large>
                <Large project={project3}></Large>
            </Flex>
            <Flex maxW="100%" gap={1} direction={'row'}>
                <Box display='flex' gap={1} flex={'0.6'} direction={'row'}>
                    <Large project={project4}></Large>
                    <Large project={project5}></Large>
                </Box>
                <Large project={project6}></Large>
                <Large project={project7}></Large>
            </Flex>
            <Flex maxW="100%" gap={1}>
                <Large project={project2}></Large>
                <Large project={project3}></Large>
                <Large project={project1}></Large>
            </Flex>
        </Box>
    )
}

// TODO create data projects

// export async function getStaticProps() {
//     const projects = await (await fetch('https://example.com/posts'))?.json()
//     return {
//         props: {
//             projects
//         }
//     }
// }