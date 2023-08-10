import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
export default function Footer({ adress }) {
  return (
    <Box bg="#171713" className="footer">
      <Flex flexDirection="column" ml={{ md: "20", base: "5" }}>
        <Box
          mt={{ md: "20", base: "10" }}
          bg="#3F3EC2"
          maxW="180px"
          color="white"
          text-align="center"
          className="footer__slogan rotate"
        >
          <Text as="b" mx="auto" fontSize={{ md: "24px", base: "18px" }}>
            Get in touch
          </Text>
        </Box>
        <Text
          as="u"
          className="rotate"
          color="white"
          fontSize={{ md: "90px", base: "30px" }}
          mt={{ md: "-8", base: "0" }}
        >
          hello@hipwrap.com
        </Text>
        <Text
          as="u"
          className="rotate"
          color="white"
          fontSize={{ md: "90px", base: "30px" }}
          mt={{ md: "-8", base: "0" }}
        >
          +7 999 999 99 99
        </Text>
        <Box display="flex" flexDirection="row" mt={{ md: "10", base: "5" }}>
          <Text color="white" fontSize={{ md: "24px", base: "18px" }}>
            TELEGRAM
          </Text>
          <FiArrowUpRight color="#3F3EC2" size="35px" />
          {/* <Image
            alt="arrow"
            mr={{ md: "10", base: "5" }}
            src="./Arrow.svg"
            w={{ md: "19px", base: "15px" }}
          ></Image> */}
          <Text color="white" fontSize={{ md: "24px", base: "18px" }}>
            INSTAGRAM
          </Text>
          <FiArrowUpRight color="#3F3EC2" size="35px" />
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
          mt={{ md: "10", base: "5" }}
        >
          <Text as="b" mb={{ md: "3", base: "1" }}>
            ADDRESS
          </Text>
          <Text as="b">Название улицы</Text>
          <Text as="b">Челябинск</Text>
          <Text as="b">-</Text>
          <Box display="flex" flexDirection="row">
            <Text as="b">показать на карте</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
// Вопрос, мб лучше прокинуть стейт isMobile чем вызывать в каждом?
