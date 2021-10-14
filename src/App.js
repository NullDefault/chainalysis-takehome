import { Flex, Box, Icon, useColorModeValue } from "@chakra-ui/react";
import Header from "./components/Header";
import { FaEthereum, FaBtc } from "react-icons/fa";
import PriceTable from "./components/PriceTable";

function App() {
  const bg = useColorModeValue("white", "blackOlive.500");
  return (
    <Box>
      <Header />
      <Flex
        bg={bg}
        minH="95vh"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Flex minH="80vh" minW="80vw" direction="row" color="black">
          <Flex direction="column" w="100%" bg="silver.500" mr="2%">
            <Flex height="12%" bg="teal.500" w="100%" alignItems="center">
              <Icon
                as={FaEthereum}
                mx="auto"
                fontSize="48px"
                color="floralWhite.500"
              />
            </Flex>
            <PriceTable currency="Ethereum" currencyColor="teal.500" />
          </Flex>
          <Flex direction="column" w="100%" bg="silver.500">
            <Flex height="12%" bg="orange.500" w="100%" alignItems="center">
              <Icon
                as={FaBtc}
                mx="auto"
                fontSize="48px"
                color="floralWhite.500"
              />
            </Flex>
            <PriceTable currency="Bitcoin" currencyColor="orange.500" />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default App;
