import {
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Tfoot,
} from "@chakra-ui/react";

function PriceTable(props) {
  const infoRow = (
    <Tr>
      <Th color="gray.600">Exchange</Th>
      <Th isNumeric color="green">
        Buy
      </Th>
      <Th isNumeric color="red">
        Sell
      </Th>
    </Tr>
  );

  return (
    <Table variant="simple" {...props}>
      <TableCaption bg={props.currencyColor} color="white">
        {props.currency}
      </TableCaption>
      <Thead>{infoRow}</Thead>
      <Tbody>
        <Tr>
          <Td>Coinbase</Td>
          <Td isNumeric>404058.500</Td>
          <Td isNumeric>253595.200</Td>
        </Tr>
      </Tbody>
      <Tfoot>{infoRow}</Tfoot>
    </Table>
  );
}

export default PriceTable;
