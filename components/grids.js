

// TODO create grid projects

import { Box, Flex } from "@chakra-ui/react";
import BlockGrid from "./grid-project/blockGrid";

export default function Grids(props) {


  //TODO test data, delete later
  let project1 = {
    'flex_size': '0.6',
    'height_size': '70vh',
    'color': 'blue',
    'video': true
  }
  let project2 = {
    'flex_size': '0.4',
    'height_size': '70vh',
    'color': 'tomato'
  }
  let project3 = {
    'flex_size': '0.4',
    'height_size': '70vh',
    'color': 'black'
  }
  let project4 = {
    'flex_size': '0.5',
    'height_size': '40vh',
    'color': 'black'
  }
  let project5 = {
    'flex_size': '0.5',
    'height_size': '40vh',
    'color': 'tomato'
  }
  let project6 = {
    'flex_size': '0.4',
    'height_size': '40vh',
    'color': 'green'
  }
  let project7 = {
    'flex_size': '0.4',
    'height_size': '40vh',
    'color': 'yellow'
  }


  //import React, { useState } from "react";
  // const Counter = ({ parentCallback }) => {
  //   const [count, setCount] = useState(0);
  //   return (
  //     <button
  //       onClick={() => {
  //         const newValue = count + 1;
  //         setCount(newValue);
  //         parentCallback(newValue);
  //       }}
  //     >
  //       Click me {count}
  //     </button>
  //   );
  // };
  // export default function App() {
  //   const callback = (val) => {
  //     console.log(val);
  //   };
  //   return (
  //     <div>
  //       <Counter parentCallback={callback} />
  //     </div>
  //   );
  // }

  const filterProjects = (projects, target) => {
    if (target != 0) {
      return projects
    }
  }

  return (
    // Template flexbox
    <Box>
      <Flex justify-content={"space-around"} maxW="100%" gap={1}>
        <BlockGrid project={project1}></BlockGrid>
        <BlockGrid project={project2}></BlockGrid>
        <BlockGrid project={project3}></BlockGrid>
      </Flex>
      <Flex maxW="100%" gap={1} direction={'row'}>
        <Box display='flex' gap={1} flex={'0.6'} direction={'row'}>
          <BlockGrid project={project4}></BlockGrid>
          <BlockGrid project={project5}></BlockGrid>
        </Box>
        <BlockGrid project={project6}></BlockGrid>
        <BlockGrid project={project7}></BlockGrid>
      </Flex>
      <Flex maxW="100%" gap={1}>
        <BlockGrid project={project2}></BlockGrid>
        <BlockGrid project={project3}></BlockGrid>
        <BlockGrid project={project1}></BlockGrid>
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