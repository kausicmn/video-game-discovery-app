import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react';
import {Genre} from "./hooks/useGenre";
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
export interface GameQuery {
  genre: Genre|null;
  platform: Platform|null;
}
function App() {
  const [gamequery,setgamequery]=useState<GameQuery>({} as GameQuery)
return <Grid templateAreas={{base:`"nav" "main"`,
lg:`"nav nav" "aside main"`}}
templateColumns={
  {
    base:'1fr',
    lg:'200px 1fr',

  }
}>
  <GridItem area='nav'>
    <Navbar></Navbar>
  </GridItem>
  <Show above='lg'>
  <GridItem area='aside' paddingX='5'><GenreList selectedgenre={gamequery.genre} onselectgenre={(genre)=>setgamequery({...gamequery,genre})}></GenreList></GridItem>
  </Show>
  <GridItem area='main' >
    <PlatformSelector selectedplatform={gamequery.platform} onselectplatform={(platform)=>setgamequery({...gamequery,platform})}></PlatformSelector>
    <GameGrid gameQuery={gamequery}></GameGrid>
  </GridItem>
</Grid>

}

export default App
