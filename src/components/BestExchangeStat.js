import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";

function BestExchangeStat(props) {
  return (
      <Stat {...props}>
        <StatLabel>{props.exchange}</StatLabel>
        <StatNumber pt="8px">{parseFloat(props.value).toFixed(2)+"$"}</StatNumber>
      </Stat>
  );
}

export default BestExchangeStat;