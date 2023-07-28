import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/logo.webp";
import Colormode from './colormode';

const Navbar = () => {
  return (
    <HStack  justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='60px' ></Image>
        <Colormode></Colormode>
    </HStack>
  )
}

export default Navbar