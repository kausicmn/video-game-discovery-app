import { HStack, Image, List, ListItem, Spinner, Button } from '@chakra-ui/react';
import useGenre, { Genre } from '../hooks/useGenre';
import getcropperurl from '../services/image-url';
interface Props {
    onselectgenre:(genre:Genre)=>void;
}
const GenreList = ({onselectgenre}:Props) => {
    const { data, error, loading } = useGenre()
    if(error) return null;
    if (loading==true) return <Spinner/>
  return (
    <List>
        {data.map(g=><ListItem key={g.id} paddingY='5px'>
            <HStack>
            <Image boxSize='32px' borderRadius={8} src={getcropperurl(g.image_background)}></Image>
            <Button fontSize={'lg'} variant='link' onClick={()=>onselectgenre(g)}>{g.name}</Button>
                
            </HStack></ListItem>)}
    </List>
  )
}

export default GenreList