import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Link
} from "@chakra-ui/react";
import Image from 'next/image';
import useMediaQuery from "../utils/useMediaQuery";
import { Navbar } from "./navbar";
// import '../styles/logo.css'

// https://www.framer.com/motion/examples/
export default function Header() {

  const isMobile = useMediaQuery("(max-width: 640px)");
  
const links = [
  {
      title: 'главная',
      link: '/'
  },
  {
      title: 'услуги',
      link: '/services'
  },
  {
      title: 'магазин',
      link: '/store'
  },
  {
      title: 'контакты',
      link: '/contact'
  },
]
  // const { isOpen, onOpen, onClose } = useDisclosure();
 return (
  // TODO перенести контейнер в родительский блок
  <>
  {isMobile 
    ? (<Navbar links={links}/>)
    : (<Container maxW='1200'>
      <Box px={5}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
          {/*<Heading as='h3' size='lg' fontWeight={'800'} className={styles.logo}>HIPWRAP</Heading>*/}
          <Link href="/"><Image src="/logo.svg" alt="logo" objectFit='cover' width="200px" height="80px" priority></Image></Link>
          <ButtonGroup gap='5'>
          {links.map((item, index) => (
          <Button key={index} colorScheme='black' variant='link' className={"menu-button"}><Link href={item.link}>{item.title}</Link></Button>
          ))}
          </ButtonGroup>
        </Flex>
      </Box>
    </Container>)}
    </>
  )
}

// TODO create mobile header


