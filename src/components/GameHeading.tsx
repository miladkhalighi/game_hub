import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../store";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

const GameHeading = () => {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(selectedPlatformId);

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(selectedGenreId);

  const heading = `${platform?.name ?? ""} ${genre?.name ?? ""} Games`;
  return <Heading color={'gray'}>{heading}</Heading>;
};

export default GameHeading;
