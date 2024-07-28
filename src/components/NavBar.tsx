import { HStack, Image, Switch, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <SearchBar></SearchBar>
      <Switch colorScheme=""></Switch>
      <Text>Dark Mode</Text>
    </HStack>
  );
};

<HStack>Image</HStack>;
export default NavBar;
