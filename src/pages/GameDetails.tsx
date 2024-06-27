import ExpandableText from "../components/ExpandableText";
import { Box, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import useGameDetails from "../hooks/useGameDetails";
import GameDetailsDefGrid from "../components/GameDetailsDefGrid";
import ScreenShots from "../components/ScreenShots";
import Trailer from "../components/Trailer";

const GameDetails = () => {
  const { data: gameDetails, isLoading, error } = useGameDetails();

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <Spinner />;
  if (error || !gameDetails) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <GridItem>
          <Heading my={4}>{gameDetails.name}</Heading>
          <ExpandableText>{gameDetails.description_raw}</ExpandableText>
          <GameDetailsDefGrid gameDetails={gameDetails} />
        </GridItem>
        <GridItem>
          <Box mb={4}>
            <Trailer gameId={gameDetails.id} />
          </Box>
          <ScreenShots gameId={gameDetails.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetails;
