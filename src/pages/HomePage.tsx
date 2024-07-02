import { Box, Grid, GridItem, Show, Wrap } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
      color="blackAlpha.700"
    >
      <Show above="lg">
        <GridItem area={"aside"}>
          <Box h={"100vh"} p={6}>
            <GenreList />
          </Box>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameHeading />
        <Wrap gap={4} my={6}>
          <PlatformSelector />
          <SortSelector />
        </Wrap>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
