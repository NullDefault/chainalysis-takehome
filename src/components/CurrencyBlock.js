import { Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaEthereum, FaBitcoin } from "react-icons/fa";
import PriceTable from "./PriceTable";
import { getAllBTC, getAllETH } from "../dataAPI";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
// json object containing currency based elements of functionality. Helps keeps the code DRY
const currencySpecific = {
  Ethereum: {
    bgColor: ["teal.400", "teal.600"],
    getData: getAllETH,
    icon: FaEthereum,
  },
  Bitcoin: {
    bgColor: ["orange.400", "orange.600"],
    getData: getAllBTC,
    icon: FaBitcoin,
  },
};
// Component for displaying buy / sell data for a cryptocurrency
function CurrencyBlock(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    currencySpecific[props.currency].getData(setData);
  }, []);

  const bg = useColorModeValue(...currencySpecific[props.currency].bgColor);

  return (
    <Flex
      direction="column"
      bg={useColorModeValue("silver.500", "blackOlive.500")}
      {...props}
    >
      <Flex height="12%" bg={bg} w="100%" alignItems="center">
        <Icon
          as={currencySpecific[props.currency].icon}
          p="8px"
          mx="auto"
          fontSize="48px"
          color="floralWhite.500"
        />
      </Flex>
      {data !== null ? (
        <PriceTable
          currency={props.currency}
          currencycolor={bg} // this was giving me a weird console error, which is why it's not in camelCase
          data={data}
          h="88%"
        />
      ) : (
        <LoadingSpinner h="88%" />
      )}
    </Flex>
  );
}

export default CurrencyBlock;
