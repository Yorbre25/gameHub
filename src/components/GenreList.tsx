import useGenres from "../hooks/useGenres";
import { Text } from "@chakra-ui/react";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <>
      <ul>
        {genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
