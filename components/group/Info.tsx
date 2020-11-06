import { Flex, VStack, Text } from "@chakra-ui/core";

export function InfoGroup() {
  return (
    <Flex py="12px" borderTop="1px solid #dbdbdb" fontSize="0.9rem">
      <VStack flex="1" spacing="0px">
        <Text fontWeight="600">100</Text>
        <Text>貼文</Text>
      </VStack>
      <VStack flex="1" spacing="0px">
        <Text fontWeight="600">123,789</Text>
        <Text>位追蹤者</Text>
      </VStack>
      <VStack flex="1" spacing="0px">
        <Text fontWeight="600">10</Text>
        <Text>追蹤中</Text>
      </VStack>
    </Flex>
  );
}
