import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children?: string;
  limit?: number;
}

const ExpandableText = ({ children, limit = 300 }: Props) => {
  const [expanded, setExpanded] = useState(true);
  if (!children) return null;
  const summary =
    children.length > limit ? children.substring(0, limit) + "..." : children;
  const txt = expanded ? summary : children;
  return (
    <Text lineHeight={1.7}>
      {txt}{" "}
      <Button
        onClick={() => setExpanded(!expanded)}
        fontWeight={"bold"}
        colorScheme="yellow"
        ml={1}
        size={'sm'}
      >
        {expanded ? "Show More" : "Show Less"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
