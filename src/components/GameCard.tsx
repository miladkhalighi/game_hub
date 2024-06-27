import {
  Card,
  CardBody,
  Image,
  Heading,
  CardFooter,
  HStack,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import ScoreBadge from "./ScoreBadge";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

export const cardStyle = {
  borderRadius: "lg",
  overflow: "hidden",
  shadow: "lg",
  transition: "transform 200ms",
  _hover: {
    bg: "gray.200",
    transform: "scale(1.05)",
  },
};

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card sx={cardStyle}>
      <Link to={"/games/" + game.slug}>
        <Image src={game.background_image} fit={"cover"} aspectRatio={1.5} />
        <CardBody>
          <HStack
            w={"100%"}
            alignItems={"end"}
            justifyContent={"space-between"}
          >
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <ScoreBadge score={game.metacritic} />
          </HStack>
        </CardBody>
        <CardFooter>
          <Heading fontSize={"2xl"}>
            {game.name}
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default GameCard;
