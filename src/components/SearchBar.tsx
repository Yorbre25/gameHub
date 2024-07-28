import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons"; // Import the appropriate icon component

const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />{" "}
      </InputLeftElement>
      <Input minW="lg" type="text" placeholder="Search for game..." />
    </InputGroup>
  );
};

export default SearchBar;
