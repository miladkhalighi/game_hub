import useScreenShots from "../hooks/useScreenShots";
import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const ScreenShots = ({ gameId }: Props) => {
  const { data:screenShots, error, isLoading } = useScreenShots(gameId);

  if (error) return null;
  return (
    <>
      {isLoading && <Spinner />}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
        {screenShots &&
          screenShots.results.map((e) => (
            <Image
              key={e.id}
              src={e.image}
              borderRadius={"md"}
              boxShadow={"lg"}
              boxSize={"contain"}
              aspectRatio={1.5}
            />
          ))}
      </SimpleGrid>
    </>
  );
};

export default ScreenShots;
