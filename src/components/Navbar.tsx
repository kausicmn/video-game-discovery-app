import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/logo.webp";
import Colormode from './colormode';
import SearchInput from './SearchInput';
interface Props{
    onSearch:(input:string)=>void
}
const Navbar = ({onSearch}:Props) => {
  return (
    <HStack padding='10px'>
        <Image src={logo} boxSize='60px' ></Image>
        <SearchInput onsubmitinput={(input)=>onSearch(input)}></SearchInput>
        <Colormode></Colormode>
    </HStack>
  )
}

export default Navbar