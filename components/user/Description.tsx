import { Heading, Text, Box } from '@chakra-ui/core'

export function UserDescription() {
  return (
    <Box p={{ base: '0 16px 21px', md: 0 }} fontSize="14px" lineHeight="20px">
      <Heading as="h1" size="sm">
        Senlima Sun
      </Heading>
      <Text>
        Hello everybody. It just a practice application for display images and
        grid like instagram. Too easy, too boring.
      </Text>
    </Box>
  )
}
