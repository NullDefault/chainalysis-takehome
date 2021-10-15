import { Flex, Icon } from "@chakra-ui/react";
import { FaEthereum, FaBitcoin } from "react-icons/fa";
import PriceTable from "./PriceTable";
import { getAllBTC, getAllETH } from "../functions/dataAPI";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const currencySpecific = {
  Ethereum: {
    bgColor: "teal.500",
    getData: getAllETH,
    icon: FaEthereum,
  },
  Bitcoin: {
    bgColor: "orange.500",
    getData: getAllBTC,
    icon: FaBitcoin,
  },
};

function CurrencyBlock(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    currencySpecific[props.currency].getData(setData);
  }, []);

  return (
    <Flex
      direction="column"
      w="100%"
      bg="silver.500"
      {...props}
    >
      <Flex
        height="12%"
        bg={currencySpecific[props.currency].bgColor}
        w="100%"
        alignItems="center"
      >
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
          currencyColor={currencySpecific[props.currency].bgColor}
          data={data}
          h="100%"
        />
      ) : (
        <LoadingSpinner h="100%" />
      )}
    </Flex>
  );
}

export default CurrencyBlock;
