import { Flex, Spinner } from "@chakra-ui/react";

function LoadingSpinner(props) {
  return (
    <Flex alignItems="center" justifyContent="center" {...props}>
      <Spinner
        thickness="8px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        height={{ base: "5vh", md: "25vh" }}
        width={{ base: "5vh", md: "25vh" }}
        m="48px"
      />
    </Flex>
  );
}

export default LoadingSpinner;
