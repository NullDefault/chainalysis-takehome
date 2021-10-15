import { Flex, Box, useColorModeValue } from "@chakra-ui/react";
import Header from "./components/Header";
import CurrencyBlock from "./components/CurrencyBlock";
import Footer from "./components/Footer";

function App() {
  const bg = useColorModeValue("floralWhite.500", "eerieBlack.500");

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
          <CurrencyBlock
            currency="Bitcoin"
            w={{ base: "100%", md: "50%" }}
            mt={{ base: "8%", md: "0" }}
            mr={{ base: "0", md: "3%" }}
          />
          <CurrencyBlock
            currency="Ethereum"
            w={{ base: "100%", md: "50%" }}
            mb={{ base: "8%", md: "0" }}
            mt={{ base: "8%", md: "0" }}
          />
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
}

export default App;
