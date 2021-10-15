import { chakra, Flex, useColorModeValue } from "@chakra-ui/react";
import Logo from "./Logo";
import { ColorModeSwitch } from "./ColorModeSwitch";

function Header() {
  const bg = useColorModeValue("gray.200", "eerieBlack.500");

  return (
    <chakra.header bg={bg} w="full" px={{ base: 2, sm: 4 }} py={4} shadow="md">
      <Flex  justify="space-between">
        <Flex direction="row">
          <Logo p="4px" width={{base: "150px", md: "250px"}}/>
        </Flex>
        <ColorModeSwitch />
      </Flex>
    </chakra.header>
  );
}

export default Header;
