import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
// import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{ base: '"nav" "main"', lg: '"nav nav" "aside main"' }}
      // bg="gray.500"
      w="100vw"
      // h="50vw"
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">Main</GridItem>
    </Grid>
  );
}

export default App;
