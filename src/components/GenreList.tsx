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
  useColorModeValue,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../utils/imageUrl";
import useGameQueryStore from "../store";

const itemStyle = {
  _hover: {
    bg: "rgba(255,196,0,0.1)",
    transform: "scale(1.05)",
    borderRadius: "lg",
  },
  transition: "transform 300ms",
};

const GenreList = () => {
  const { error, isLoading, data } = useGenres();
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const headingColor = useColorModeValue("#14213D", "#E5E5E5");
  const selectedItemColor = useColorModeValue("#663F00", "#B87100");

  return (
    <>
      <Heading fontSize={"2xl"} color={headingColor} mb={3}>
        Genres
      </Heading>
      {isLoading && <Spinner />}
      {error && <Text color={'gray'}>{error.message}</Text>}
      {data && (
        <List>
          {data.results.map((genre) => (
            <ListItem key={genre.id} py={2}>
              <HStack sx={itemStyle}>
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
                  fontWeight={selectedGenreId === genre.id ? "semibold" : "normal"}
                  whiteSpace={"normal"}
                  textAlign={"left"}
                  textColor={selectedGenreId === genre.id ? selectedItemColor : "gray"}
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
