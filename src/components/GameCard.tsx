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

// eslint-disable-next-line react-refresh/only-export-components
export const cardStyle = {
  borderRadius: "lg",
  overflow: "hidden",
  shadow: "lg",
  transition: "transform 300ms",
  _hover: {
    bg: "rgba(255,196,9,0.1)",
    transform: "scale(1.05)",
  },
};

const imageStyle = {
  objectFit: "cover",
  aspectRatio: 1.5,
};

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card sx={cardStyle}>
      <Link to={"/games/" + game.slug}>
        <Image src={game.background_image} sx={imageStyle} />
        <CardBody>
          <HStack w={"100%"} justifyContent={"space-between"}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <ScoreBadge score={game.metacritic} />
          </HStack>
        </CardBody>
        <CardFooter>
          <HStack justifyContent={"space-between"} w={"100%"}>
            <Heading fontFamily={"Yatra One"} fontSize={"2xl"}>
              {game.name}
            </Heading>
            <Emoji rating={game.rating_top} />
          </HStack>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default GameCard;
