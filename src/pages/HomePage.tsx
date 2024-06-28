import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
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
        <Box p={6}>
          <GameHeading />
        </Box>
        <HStack mx={6} gap={4}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
