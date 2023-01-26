import {Grid, GridItem} from "@chakra-ui/react";
// TODO мб потом заменить компонент гридов
export default function Gride () {
    return (
        <div>
            <Grid templateColumns='repeat(4, 1fr)'>
                <GridItem>123</GridItem>
                <GridItem>123</GridItem>
                <GridItem>123</GridItem>
                <GridItem>123</GridItem>
            </Grid>
        </div>
    )
}