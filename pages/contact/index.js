import {Box, Flex, Spacer} from "@chakra-ui/react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';



export default function Store() {

    let arr = Array(10);
    // TODO указать верные указатели
    const defaultState = {
        center: [55.684758, 37.738521],
        zoom: 15,
    };

    return (
        <Flex>
            <Box  p='4'>
                <YMaps>
                    <Map defaultState={defaultState}>
                        <Placemark geometry={[55.684758, 37.738521]} />
                    </Map>
                </YMaps>
            </Box>
            <Spacer />
            <Box>
                Позвонить нам:
            </Box>

        </Flex>
    )
}
