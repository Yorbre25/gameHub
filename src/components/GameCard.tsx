import { SearchIcon } from "@chakra-ui/icons";
import {
  Card,
  Text,
  Image,
  Heading,
  CardBody,
  HStack,
  Container,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card maxW="sm" borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <HStack justify="space-between">
          <Container>
            <SearchIcon color="gray.300"></SearchIcon>
            <SearchIcon color="gray.300"></SearchIcon>
            <SearchIcon color="gray.300"></SearchIcon>
          </Container>
          <Text>{game.metacritic}</Text>
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
