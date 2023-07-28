import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

const Colormode = () => {
    const {toggleColorMode,colorMode}=useColorMode();
  return (
    <HStack>
        <Switch isChecked={colorMode==='dark'} onChange={toggleColorMode} colorScheme='green'></Switch>
        <Text>Dark Mode</Text>
    </HStack>
  )
}

export default Colormode