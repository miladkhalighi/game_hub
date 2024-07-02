import {
  Image,
  HStack,
  Box,
  GridItem,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import logo from "../assets/logo.svg";
import SwitchTheme from "./SwitchTheme";
import { Link } from "react-router-dom";

const NavBar = () => {
  const isAboveMd = useBreakpointValue({ base: false, md: true });
  return (
    <Grid
      templateAreas={{
        base: `"top" "bottom"`,
        md: `"main"`,
      }}
      gap={2}
      m={6}
    >
      {isAboveMd ? (
        <GridItem area="main">
          <HStack justifyContent={"space-between"} spacing={6}>
            <Link to={"/"}>
              <Image src={logo} w={48} h={12} fit={"cover"} />
            </Link>
            <Box w={"100%"}>
              <SearchInput />
            </Box>
            <SwitchTheme />
          </HStack>
        </GridItem>
      ) : (
        <>
          <GridItem area="top">
            <HStack justifyContent={"space-between"}>
              <Link to={"/"}>
                <Image src={logo} w={48} h={12} fit={"cover"} />
              </Link>
              <SwitchTheme />
            </HStack>
          </GridItem>
          <GridItem area="bottom">
            <SearchInput />
          </GridItem>
        </>
      )}
    </Grid>
  );
};

export default NavBar;
