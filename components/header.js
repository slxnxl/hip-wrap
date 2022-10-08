import {  Box,
    Flex,
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
    Stack} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Image from 'next/image'

export default function Header() {
    // const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box px={5}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Image src={"/vercel.svg"}
                width={100} height={50}
                       alt={"logo"}
                />
                        <ButtonGroup gap='2'>
                        <Button className={"menu-button"}>Главная</Button>
                        <Button className={"menu-button"}>Магазин</Button>
                        <Button className={"menu-button"}>Контакты</Button>
                        </ButtonGroup>
            </Flex>
        </Box>
    )
}

