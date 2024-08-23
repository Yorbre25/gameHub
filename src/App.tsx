import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      // templateAreas={{
      //   base: '"nav" "main"',
      //   lg: '"nav nav" "aside main"',
      // }}
      w="100vw"
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav"
        "aside main"
        "aside main"`,
      }}
      gridTemplateColumns={"150px 1fr"}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          ASIDE
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
