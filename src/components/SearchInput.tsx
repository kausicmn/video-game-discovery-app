import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
interface Props{
    onsubmitinput:(input:string)=>void
}
const SearchInput = ({onsubmitinput}:Props) => {
    const ref=useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(event)=>{
        event.preventDefault();
        if(ref.current) onsubmitinput(ref.current.value)

    }}>
    <InputGroup>
    <InputLeftElement children={<BsSearch/>}/>
    <Input ref={ref} borderRadius={20} placeholder='Search games...' variant='filled' ></Input>
    </InputGroup>
    </form>
  )
}

export default SearchInput