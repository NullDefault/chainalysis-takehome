import { Flex, Box, useColorModeValue } from "@chakra-ui/react";
import Header from "./components/Header";
import CurrencyBlock from "./components/CurrencyBlock";

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
        <Flex
          minH="80vh"
          minW="80vw"
          direction={{ base: "column", md: "row" }}
          color="black"
        >
            <CurrencyBlock currency="Bitcoin" mt={{base: "8%", md: "0"}} mr={{base: "0", md: "3%"}}/>
            <CurrencyBlock currency="Ethereum" mb={{base: "8%", md: "0"}} mt={{base: "8%", md: "0"}}/>
        </Flex>
      </Flex>
    </Box>
  );
}

export default App;
