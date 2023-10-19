import {Box, Flex, Spacer, useMediaQuery} from "@chakra-ui/react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';



export default function Store() {
    // TODO указать верные указатели
    const defaultState = {
        center: [55.684758, 37.738521],
        zoom: 15,
    };
    const isMobile = useMediaQuery("(max-width: 640px)");
    return (
        isMobile[0] ? (
            <Box width={"100%"}>
                <YMaps>
                    <Map defaultState={defaultState} width={"100%"} >
                        <Placemark geometry={[55.684758, 37.738521]} />
                    </Map>
                </YMaps>
            </Box>
        ) :
        ( <Box width={"100%"} height="400px">
        <YMaps>
            <Map defaultState={defaultState} width={"100%"} height={"100%"}>
                <Placemark geometry={[55.684758, 37.738521]} />
            </Map>
        </YMaps>
    </Box>)
            
    )
}
