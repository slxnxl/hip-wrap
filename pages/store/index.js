import {Box, SimpleGrid} from "@chakra-ui/react";
import CardStore from "../../components/store/cardStore";

export default function Store() {

    let arr = Array(10);


    return (
        <SimpleGrid columns={2} spacing={10}>
            <CardStore></CardStore>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
        </SimpleGrid>
    )
}

