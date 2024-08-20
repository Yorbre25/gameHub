import { Text, GridItem, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [...Array(10).keys()];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid minChildWidth="300px" padding="10px" spacing={10}>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
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
