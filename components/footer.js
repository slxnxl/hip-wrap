import {Box, Flex, Text, Image, Divider} from "@chakra-ui/react"
import {FiArrowUpRight} from "react-icons/fi"
import {FaLocationDot} from "react-icons/fa6"
import {useEffect, useRef, useState} from "react"
import ScrollImages from "./carousel"
import {Player} from "@lottiefiles/react-lottie-player"
import {pb} from "../utils/pb"

export default function Footer() {

    const [state, setState] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    //запрос данных для футера (мб потом перенести в статик, но так как это лежит в layout, то надо подумать как это сделать)
    useEffect( () => {
        async function fetchDataFooter() {
            if (!isLoaded) {
            try {
                const footerData = await pb?.collection("footer").getList(1, 1)
                setState(JSON.parse(JSON.stringify(footerData.items[0])))
                setIsLoaded(true)
            }
            catch (err) {
                console.log(err)
                return err
            }
        }
    } 
    fetchDataFooter()

    }, [])
    // console.log("dataaa: ", state)
    return (
        <Box bg="#171713" className="footer">
            <Flex flexDirection="column" ml={{md: "20", base: "5"}} mr={{md: "20", base: "5"}}>
                <Box
                    mt={{md: "20", base: "10"}}
                    bg="#3F3EC2"
                    maxW="180px"
                    color="white"
                    align="center"
                    className="footer__slogan rotate"
                >
                    <Text as="b" mx="auto" fontSize={{md: "24px", base: "18px"}}>
                        Get in touch
                    </Text>
                </Box>

                <Text
                    as="u"
                    className="rotate"
                    color="white"
                    fontSize={{md: "90px", base: "30px"}}
                    mt={{md: "-8", base: "0"}}
                ><a href={"mailto:" + state.email}>
                    {state.email}
                </a>
                </Text>
                <Text
                    as="u"
                    className="rotate"
                    color="white"
                    fontSize={{md: "90px", base: "30px"}}
                    mt={{md: "-8", base: "0"}}
                >
                    <a  href={"tel:"+state.number}>
                        {state.number}
                    </a>
                </Text>
                <Box display="flex" flexDirection="row" mt={{md: "10", base: "5"}}>
                    {/*TODO чутка поменять верстку чтобы оборачивать блок целиком в <a></a>*/}
                    <a href={state.telegram}>
                    <Text color="white" fontSize={{md: "24px", base: "18px"}}>
                        TELEGRAM
                    </Text></a>
                    <a href={state.telegram}>
                    <FiArrowUpRight color="#3F3EC2" size="35px"/></a>

                    {/* <Image
            alt="arrow"
            mr={{ md: "10", base: "5" }}
            src="./Arrow.svg"
            w={{ md: "19px", base: "15px" }}
          ></Image> */}
                    <a href={state.instagram}>
                    <Text color="white" fontSize={{md: "24px", base: "18px"}}>
                        INSTAGRAM
                    </Text>
                    </a>
                    <a href={state.instagram}>
                    <FiArrowUpRight color="#3F3EC2" size="35px"/>
                    </a>
                    {/* <Image
            w={{ md: "19px", base: "15px" }}
            alt="arrow"
            src="./Arrow.svg"
          ></Image> */}
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    color="white"
                    mt={{md: "10", base: "5"}}
                >
                    <Text as="b" mb={{md: "3", base: "1"}}>
                        ADDRESS
                    </Text>
                    <Text as="b">{state.adress}</Text>
                    <Text as="b">Челябинск</Text>
                    <Text as="b">-</Text>
                    <Box display="flex" flexDirection="row">
                        <FaLocationDot color="#3F3EC2" size="25px" className="location_icon"/>
                        <a href={state.location}  target="_blank"><Text as="b">показать на карте</Text> </a>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="colunm>" mt='44px'>
                    <Divider className="rotate"/>
                </Box>
                <Box className="rotate"  mt={{md: "10", base: "5"}}>
                    <ScrollImages/>
                </Box>

            </Flex>
        </Box>
    );
}



// https://hanzochang.com/articles/12