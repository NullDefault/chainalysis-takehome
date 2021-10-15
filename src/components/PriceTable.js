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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { calcBest } from "../functions/calc";
import { FaDollarSign } from "react-icons/fa";
import BestExchangeStat from "./BestExchangeStat";

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
          <Tag variant="solid" colorScheme={buyColor}>
            {parseFloat(buy).toFixed(2)}
            <TagRightIcon boxSize="12px" as={FaDollarSign} />
          </Tag>
        </Td>
        <Td isNumeric>
          <Tag variant="solid" colorScheme={sellColor}>
            {parseFloat(sell).toFixed(2)}
            <TagRightIcon boxSize="12px" as={FaDollarSign} />
          </Tag>
        </Td>
      </Tr>
    );
  }
  return resp;
}

function PriceTable(props) {
  const [bestBuy, setBestBuy] = useState({});
  const [bestSell, setBestSell] = useState({});

  useEffect(() => {
    let best = calcBest(props.data);
    setBestBuy(best.buy);
    setBestSell(best.sell);
  }, []);

  return (
    <Flex {...props}>
      <Table variant="simple" size="sm">
        <TableCaption bg={props.currencyColor} color="white">
          {props.currency}
        </TableCaption>
        <Thead>
          {" "}
          <Tr>
            <Th color="gray.600">Exchange</Th>
            <Th isNumeric color="green">
              Buy
            </Th>
            <Th isNumeric color="red">
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
              <BestExchangeStat
                exchange={bestBuy.exchange}
                value={bestBuy.value}
              />
            </Th>
            <Th isNumeric color="red.600">
              <BestExchangeStat
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
