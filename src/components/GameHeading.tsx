import { Heading, useColorModeValue } from "@chakra-ui/react";
import useGameQueryStore from "../store";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

const GameHeading = () => {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(selectedPlatformId);

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(selectedGenreId);
  const headingColor = useColorModeValue("#14213D", "#E5E5E5");

  const heading = `${platform?.name ?? ""} ${genre?.name ?? ""} Games`;
  return <Heading color={headingColor}>{heading}</Heading>;
};

export default GameHeading;
