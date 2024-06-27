import { Flex, Switch, Text, useColorMode } from "@chakra-ui/react";

const SwitchTheme = () => {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex alignItems="center" whiteSpace="nowrap">
      <Switch colorScheme="yellow" size={{ base: "md", md: "lg" }} onChange={toggleColorMode} isChecked={colorMode==='dark'}/>
      <Text
        fontWeight={{ base: "normal", md: "bold" }}
        fontSize={{ base: "10px", sm: "12px", md: "14px" }}
        ml={2}
      >
        {colorMode ==='light' ? 'Dark Mode' : 'Light Mode'}
      </Text>
    </Flex>
  );
};

export default SwitchTheme;
