import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box p={6}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
