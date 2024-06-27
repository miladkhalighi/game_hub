import { Center, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  const msg = isRouteErrorResponse(error)
    ? "This page does not exist"
    : "Something went wrong!";
  return (
    <>
      <NavBar />
      <Heading m={6}>Oops!</Heading>
      <Center>
        <Text mt={4}>{msg}</Text>
      </Center>
    </>
  );
};

export default ErrorPage;
