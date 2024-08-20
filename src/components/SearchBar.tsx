import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons"; // Import the appropriate icon component

const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300"></SearchIcon>
      </InputLeftElement>
      <Input placeholder="Search For Game..."></Input>
    </InputGroup>
  );
};

export default SearchBar;
