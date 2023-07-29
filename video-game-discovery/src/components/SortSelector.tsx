import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
interface Props{
    onselectorder:(order:string)=>void
    selectedorder:string
}
const SortSelector = ({onselectorder,selectedorder}:Props) => {
    const sortOrders=[
        
            { value:'',label:'Relevance'},
            { value:'-added',label:'Date added'},
            { value:'name',label:'Name'},
            { value:'-released',label:'Release date'},
            { value:'-metacritic',label:'Popularity'},
            { value:'-rating',label:'Average rating'}

        
    ]
    return (
        <>
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>Order by: {sortOrders.find(o=>(o.value===selectedorder))?.label||'Relavance'}</MenuButton>
            <MenuList>
            {sortOrders.map((order)=><MenuItem onClick={()=>onselectorder(order.value)}key={order.label} value={order.value}>{order.label}</MenuItem>)}
            </MenuList>
        </Menu>
        </>
      )
}

export default SortSelector