import "./App.css";
import { ChakraProvider, Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Grid
        templateAreas={{ base: '"nav" "main"', lg: '"nav nav" "aside main"' }}
        bg="gray.500"
        w="100vw"
      >
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
