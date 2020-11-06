import { Flex, Box, Skeleton } from "@chakra-ui/core";

export function DisplayRow() {
  return (
    <Flex mb="3px">
      <Box pos="relative" mr="3px" flex="1" w="100%">
        <Skeleton pos="absolute" top="0" left="0" w="100%" height="100%" />
        <Box paddingBottom="100%" />
      </Box>

      <Box pos="relative" mr="3px" flex="1" w="100%">
        <Skeleton pos="absolute" top="0" left="0" w="100%" height="100%" />
        <Box paddingBottom="100%" />
      </Box>

      <Box pos="relative" flex="1" w="100%">
        <Skeleton pos="absolute" top="0" left="0" w="100%" height="100%" />
        <Box paddingBottom="100%" />
      </Box>
    </Flex>
  );
}
