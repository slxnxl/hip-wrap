import {  Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Image from 'next/image'

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-evenly'}>
                <Image src={"/vercel.svg"}
                width={100} height={50}
                       alt={"logo"}
                />
                <Button>Проекты</Button>
                <Button>Магазин</Button>`
                <Button>Контакты</Button>
                <Button>Соц сети</Button>
            </Flex>
        </Box>
    )
}

