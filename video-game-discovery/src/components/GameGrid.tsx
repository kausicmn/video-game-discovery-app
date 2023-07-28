import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
const GameGrid = () => {
  const { games, error, loading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6,7,8,9,10];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={10}
      >
        {loading&& skeletons.map(skeleton=><GameCardContainer key={skeleton}><GameCardSkeleton key={skeleton}></GameCardSkeleton></GameCardContainer>)}
        {games.map((game) => (
         <GameCardContainer key={game.id}><GameCard key={game.id} game={game}></GameCard></GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;