import {
  Flex,
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

function makeTableRows(data) {
  let resp = [];
  let keys = Object.keys(data);

  for (let i = 0; i < keys.length; i++) {
    let exchange = keys[i];
    let buy = data[exchange].buy;
    let sell = data[exchange].sell;

    resp.push(
      <Tr>
        <Td>{exchange}</Td>
        <Td isNumeric>{parseFloat(buy).toFixed(3) + " $"}</Td>
        <Td isNumeric>{parseFloat(sell).toFixed(3) + " $"}</Td>
      </Tr>
    );
  }
  return resp;
}

function PriceTable(props) {
  const [bestBuy, setBestBuy] = useState(null);
  const [bestSell, setBestSell] = useState(null);

  useEffect(() => {
    let best = calcBest(props.data);
    setBestBuy(best.buy);
    setBestSell(best.sell);
  }, []);

  return (
    <Flex {...props}>
      <Table variant="simple">
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
        <Tbody>{makeTableRows(props.data, setBestBuy, setBestSell)}</Tbody>
        <Tfoot>
          <Tr>
            <Th color="blue.600">Best</Th>
            <Th
              isNumeric
              color="green.600"
              fontSize={{ base: "16px", md: "22px" }}
            >
              {bestBuy}
            </Th>
            <Th
              isNumeric
              color="red.600"
              fontSize={{ base: "16px", md: "22px" }}
            >
              {bestSell}
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </Flex>
  );
}

export default PriceTable;
