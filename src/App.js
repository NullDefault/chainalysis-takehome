import { Flex, Box, Icon, Spinner, useColorModeValue } from "@chakra-ui/react";
import Header from "./components/Header";
import { FaEthereum, FaBtc } from "react-icons/fa";
import PriceTable from "./components/PriceTable";
import { getAllBTC, getAllETH } from "./functions/dataAPI";
import { useEffect, useState } from "react";

function Loading() {
  return (
    <Flex h="100%" alignItems="center" justifyContent="center">
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

function App() {
  const bg = useColorModeValue("white", "blackOlive.500");
  const [ethData, setETHData] = useState(null);
  const [btcData, setBTCData] = useState(null);

  useEffect(() => {
    getAllETH(setETHData);
    getAllBTC(setBTCData);
  }, []);

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
        <Flex
          minH="80vh"
          minW="80vw"
          direction={{ base: "column", md: "row" }}
          color="black"
        >
          <Flex
            direction="column"
            w="100%"
            bg="silver.500"
            mr={{ base: "", md: "2%" }}
          >
            <Flex height="12%" bg="teal.500" w="100%" alignItems="center">
              <Icon
                as={FaEthereum}
                p="8px"
                mx="auto"
                fontSize="48px"
                color="floralWhite.500"
              />
            </Flex>
            {ethData !== null ? (
              <PriceTable
                currency="Ethereum"
                currencyColor="teal.500"
                data={ethData}
                h="100%"
              />
            ) : (
              <Loading />
            )}
          </Flex>
          <Flex
            direction="column"
            w="100%"
            bg="silver.500"
            mt={{ base: "8%", md: "0" }}
          >
            <Flex height="12%" bg="orange.500" w="100%" alignItems="center">
              <Icon
                as={FaBtc}
                mx="auto"
                p="8px"
                fontSize="48px"
                color="floralWhite.500"
              />
            </Flex>
            {btcData !== null ? (
              <PriceTable
                currency="Bitcoin"
                currencyColor="orange.500"
                data={btcData}
                h="100%"
              />
            ) : (
              <Loading />
            )}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default App;
