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
    // TODO перенести контейнер в родительский блок
    <Container maxW='1200'>
      <Box px={5}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
          {/*<Heading as='h3' size='lg' fontWeight={'800'} className={styles.logo}>HIPWRAP</Heading>*/}
          <Link href="/"><Image src="/logo.svg" alt="logo" objectFit='cover' width="200px" height="80px"></Image></Link>
          <ButtonGroup gap='5'>
            <Button colorScheme='black' variant='link' className={"menu-button"}><Link href="/">главная</Link></Button>
            <Button colorScheme='black' variant='link' className={"menu-button"}><Link href="/store">магазин</Link></Button>
            <Button colorScheme='black' variant='link' className={"menu-button"}><Link href="/contact">контакты</Link></Button>
          </ButtonGroup>
        </Flex>
      </Box>
    </Container>
  )
}

// TODO create mobile header


