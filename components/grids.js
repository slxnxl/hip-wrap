

// TODO create grid projects

import {Flex} from "@chakra-ui/react";
import Large from "./grid-project/large";

export default function Grids ({ projects }) {
    let project1 = {
        'flex_size' : '1',
        'height_size' : '100px',
        'color' : 'blue'
    }

    let project2 = {
        'flex_size' : '0.4',
        'height_size' : '100px',
        'color' : 'tomato'
    }
    let project3 = {
        'flex_size' : '0.4',
        'height_size' : '100px',
        'color' : 'black'
    }

    return (
    <Flex>
        <Large project={project1}></Large>
        <Large project={project2}></Large>
        <Large project={project3}></Large>
    </Flex>
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