import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Link
} from "@chakra-ui/react";
import Image from 'next/image';
// import '../styles/logo.css'

// https://www.framer.com/motion/examples/
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
            <Button colorScheme='black' variant='link' className={"menu-button"}><Link href="/services">услуги</Link></Button>
            <Button colorScheme='black' variant='link' className={"menu-button"}><Link href="/store">магазин</Link></Button>
            <Button colorScheme='black' variant='link' className={"menu-button"}><Link href="/contact">контакты</Link></Button>
          </ButtonGroup>
        </Flex>
      </Box>
    </Container>
  )
}

// TODO create mobile header


