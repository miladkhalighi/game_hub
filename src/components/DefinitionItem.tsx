import { Box, Heading } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode;
}

const DefinitionItem = ({ term, children }: Props) => {
  const color = useColorModeValue("#14213D", "#E5E5E5");

  return (
    <Box p={2}>
      <Heading fontSize={"md"} color={color}>
        {term}
        <Box mt={3}>{children}</Box>
      </Heading>
    </Box>
  );
};

export default DefinitionItem;
