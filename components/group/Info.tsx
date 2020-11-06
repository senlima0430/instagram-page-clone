import { Flex, Stack, Text } from '@chakra-ui/core'

export function InfoGroup() {
  return (
    <Flex
      py={{ base: '12px', md: 0 }}
      mb={{ base: 0, md: '20px' }}
      borderTop={{ base: '1px solid #dbdbdb', md: 'none' }}
      fontSize="0.9rem"
    >
      <Stack
        flex="1"
        spacing="0px"
        direction={{ base: 'column', md: 'row' }}
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Text fontWeight="600">100</Text>
        <Text>貼文</Text>
      </Stack>
      <Stack
        flex="1"
        spacing="0px"
        direction={{ base: 'column', md: 'row' }}
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Text fontWeight="600">123,789</Text>
        <Text>位追蹤者</Text>
      </Stack>
      <Stack
        flex="1"
        spacing="0px"
        direction={{ base: 'column', md: 'row' }}
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Text fontWeight="600">10</Text>
        <Text>追蹤中</Text>
      </Stack>
    </Flex>
  )
}
