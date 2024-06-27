import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const ScoreBadge = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge fontSize={14} px={1.5} py={1} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default ScoreBadge;
