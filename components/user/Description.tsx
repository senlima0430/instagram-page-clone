import { Heading, Text, Box } from "@chakra-ui/core";

export function UserDescription() {
  return (
    <Box p="0 16px 21px" fontSize="14px" lineHeight="20px">
      <Heading as="h1" size="sm">
        Senlima Sun
      </Heading>
      <Text noOfLines={2}>
        Hello everybody. It just a practice application for display images and
        grid like instagram. Too easy, too boring.
      </Text>
    </Box>
  );
}
