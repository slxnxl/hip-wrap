import {
    Box,
    Flex,
    Container,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    ButtonGroup,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack, Heading
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Image from 'next/image'
import styles from "../styles/Home.module.css";
// import '../styles/logo.css'

export default function Header() {
    // const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Container maxW='1200'>
        <Box px={5}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
                        <Heading as='h3' size='lg' fontWeight={'800'} className={styles.logo}>HIP WRAP</Heading>
                        <ButtonGroup gap='2'>
                        <Button colorScheme='gray' variant='ghost' className={"menu-button"}>главная</Button>
                        <Button colorScheme='gray' variant='ghost' className={"menu-button"}>магазин</Button>
                        <Button colorScheme='gray' variant='ghost' className={"menu-button"}>контакты</Button>
                        </ButtonGroup>
            </Flex>
        </Box>
        </Container>
    )
}

