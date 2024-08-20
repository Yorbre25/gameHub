import { Text, GridItem, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid minChildWidth="300px" padding="10px" spacing={10}>
        {games.map((game) => (
          <GridItem key={game.id}>
            <GameCard key={game.id} game={game}></GameCard>
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
