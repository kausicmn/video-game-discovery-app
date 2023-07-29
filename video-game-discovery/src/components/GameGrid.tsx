import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
import { GameQuery } from "../App";
interface Props
{
    gameQuery:GameQuery
}
const GameGrid = ({gameQuery}:Props) => {
  const { data, error, loading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6,7,8,9,10];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
         padding={5}
        spacing={6}
      >
        {loading&& skeletons.map(skeleton=><GameCardContainer key={skeleton}><GameCardSkeleton key={skeleton}></GameCardSkeleton></GameCardContainer>)}
        {data.map((game) => (
         <GameCardContainer key={game.id}><GameCard key={game.id} game={game}></GameCard></GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
