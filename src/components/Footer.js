import { chakra, Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Footer component
function Footer() {
  const bg = useColorModeValue("gray.200", "gray.800");

  return (
    <chakra.footer
      bg={bg}
      w="full"
      px={{ base: 2, sm: 4 }}
      py={{ base: 2, sm: 4 }}
      shadow="md"
      maxH="20vh"
    >
      <Flex justify="center" alignItems="center" direction="column">
        <Text align="center" p="8px">
          Made with care by David Nesterov-Rappoport{" "}
          <chakra.a color="blue.400" href="https://www.nulldefault.com/">
            (<u>NullDefault</u>)
          </chakra.a>
        </Text>
        <Text align="center" p="4px">
          ∅
        </Text>
      </Flex>
    </chakra.footer>
  );
}

export default Footer;
