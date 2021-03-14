import { Box, Flex, Text } from '@chakra-ui/react'

export function Info() {
  return (
    <Flex w="full" h="50vh" flexDir="column" align="center" justify="center">
      <Box aria-label="introduction">
        <Text>👋 Hi! I'm Senlima Sun.</Text>
        <Text>Just try to display some image.</Text>
        <Text>With unsplash image api.</Text>
      </Box>
    </Flex>
  )
}
