import {
  Flex,
  Tag,
  TagRightIcon,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Tfoot,
  useColorModeValue
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import BestExchangeBlock from "./BestExchangeBlock";
// function to calculate the best exchanges for both buying and selling
export function calcBest(data) {
  let lowestBuy = Number.POSITIVE_INFINITY;
  let highestSell = Number.NEGATIVE_INFINITY;
  let exchangeToBuy = null;
  let exchangeToSell = null;

  let keys = Object.keys(data);

  for (let i = 0; i < keys.length; i++) {
    let name = keys[i];
    let buy = data[name].buy;
    let sell = data[name].sell;

    if (buy < lowestBuy) {
      lowestBuy = buy;
      exchangeToBuy = name;
    }
    if (sell > highestSell) {
      highestSell = sell;
      exchangeToSell = name;
    }
  }

  return {
    buy: { exchange: exchangeToBuy, value: lowestBuy },
    sell: { exchange: exchangeToSell, value: highestSell },
  };
}
// function to generate exchange rows. This way the exchanges aren't hard coded.
function makeTableRows(data, bestBuy, bestSell) {
  let resp = [];
  let keys = Object.keys(data);

  for (let i = 0; i < keys.length; i++) {
    let exchange = keys[i];
    let buy = data[exchange].buy;
    let sell = data[exchange].sell;

    let buyColor = exchange === bestBuy ? "blue" : "gray";
    let sellColor = exchange === bestSell ? "blue" : "gray";

    resp.push(
      <Tr fontWeight="semibold">
        <Td fontSize={{ base: "12px", md: "26px" }}>{exchange}</Td>
        <Td isNumeric>
          <Tag my="4px" variant="solid" colorScheme={buyColor}>
            {parseFloat(buy).toFixed(2)}
            <TagRightIcon boxSize="12px" as={FaDollarSign} />
          </Tag>
        </Td>
        <Td isNumeric>
          <Tag my="4px" variant="solid" colorScheme={sellColor}>
            {parseFloat(sell).toFixed(2)}
            <TagRightIcon boxSize="12px" as={FaDollarSign} />
          </Tag>
        </Td>
      </Tr>
    );
  }
  return resp;
}
// Component for displaying exchange data in a table format.
function PriceTable(props) {
  const [bestBuy, setBestBuy] = useState({});
  const [bestSell, setBestSell] = useState({});

  useEffect(() => {
    let best = calcBest(props.data);
    setBestBuy(best.buy);
    setBestSell(best.sell);
  }, []);

  return (
    <Flex {...props} px="12px" pb="12px">
      <Table variant="simple" size={{ base: "sm", md: "md" }} color={useColorModeValue("gray.700", "silver.500")}>
        <TableCaption bg={props.currencyColor} >
          {props.currency}
        </TableCaption>
        <Thead>
          {" "}
          <Tr>
            <Th color={useColorModeValue("gray.700", "gray.400")}>Exchange</Th>
            <Th isNumeric color={useColorModeValue("green.600", "green.500")}>
              Buy
            </Th>
            <Th isNumeric color={useColorModeValue("red.600", "red.500")}>
              Sell
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {makeTableRows(props.data, bestBuy.exchange, bestSell.exchange)}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th color="blue.600" fontSize={{ base: "14px", md: "26px" }}>
              Best
            </Th>
            <Th isNumeric color="green.600">
              <BestExchangeBlock
                exchange={bestBuy.exchange}
                value={bestBuy.value}
              />
            </Th>
            <Th isNumeric color="red.600">
              <BestExchangeBlock
                exchange={bestSell.exchange}
                value={bestSell.value}
              />
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </Flex>
  );
}

export default PriceTable;
