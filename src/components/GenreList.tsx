import useGenres from "../hooks/useGenres";
import {
  HStack,
  List,
  ListItem,
  Spinner,
  Text,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../utils/imageUrl";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { error, isLoading, data } = useGenres();
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);

  return (
    <>
      <Heading fontSize={"2xl"} mb={3}>
        Genres
      </Heading>
      {isLoading && <Spinner />}
      {error && <Text>{error.message}</Text>}
      {data && (
        <List>
          {data.results.map((genre) => (
            <ListItem key={genre.id} py={"5px"}>
              <HStack>
                <Image
                  src={getCroppedImageUrl(genre.image_background)}
                  boxSize={"32px"}
                  borderRadius={"lg"}
                  objectFit={"cover"}
                />
                <Button
                  onClick={() => setGenreId(genre.id)}
                  variant={"link"}
                  fontSize={"lg"}
                  fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                  whiteSpace={"normal"}
                  textAlign={"left"}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default GenreList;
