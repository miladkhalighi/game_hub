import { Box, Heading } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode;
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box  p={2}>
      <Heading  fontSize={'md'}>
        {term}
        <Box mt={3}>{children}</Box>
      </Heading>
    </Box>
  );
};

export default DefinitionItem;
