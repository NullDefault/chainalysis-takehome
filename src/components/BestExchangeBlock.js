import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";
// Component for displaying the best exchange
function BestExchangeBlock(props) {
  return (
    <Stat {...props}>
      <StatLabel>{props.exchange}</StatLabel>
      <StatNumber pt="8px" fontSize={{ base: "12px", md: "28px" }}>
        {parseFloat(props.value).toFixed(2) + "$"}
      </StatNumber>
    </Stat>
  );
}

export default BestExchangeBlock;
