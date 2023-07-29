import { Button, Menu,MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatform'
import { Platform } from '../hooks/useGames'
interface Props{
    onselectplatform:(platform:Platform)=>void
    selectedplatform:Platform|null
}
const PlatformSelector = ({onselectplatform,selectedplatform}:Props) => {
    const {data,error} =usePlatform();
    if(error) return null;
  return (
    <>
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>{selectedplatform?.name||'Platforms'}</MenuButton>
        <MenuList>
        {data.map(d=><MenuItem key={d.id} onClick={()=>onselectplatform(d)}>{d.name}</MenuItem>)}
        </MenuList>
    </Menu>
    </>
  )
}

export default PlatformSelector