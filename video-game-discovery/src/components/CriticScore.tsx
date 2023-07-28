import { Badge, Text } from '@chakra-ui/react'
import React from 'react'
interface Props{
    criticscore:number
}
const CriticScore = ({criticscore}:Props) => {
    let color =criticscore>75?'green':criticscore>60 ?'yellow':'';
  return (
    <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius='4px'>{criticscore}</Badge>
  )
}

export default CriticScore