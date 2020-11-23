import { useState, ChangeEvent } from 'react'
import { Box, Flex, Text, Input, IconButton } from '@chakra-ui/react'
import { AiOutlineCompass } from 'react-icons/ai'
import { VscHome, VscHeart, VscAccount } from 'react-icons/vsc'

export function Navbar() {
  const [keyword, setKeyword] = useState<string>('')

  function handleKeyword(e: ChangeEvent<HTMLInputElement>) {
    setKeyword(e.target.value)
  }

  return (
    <Box as="nav" w="100%" borderBottom="1px solid #dbdbdb">
      <Flex
        mx={{ base: 0, md: 'auto' }}
        px="20px"
        w="100%"
        maxW="935px"
        align="center"
        height="54px"
      >
        <Text fontFamily="Cookie" fontSize="24px" flex="1 9999 0%">
          instagram
        </Text>

        <Input
          display={{ base: 'none', sm: 'block' }}
          flex="0 1 auto"
          size="sm"
          w="215px"
          minW="125px"
          h="28px"
          value={keyword}
          onChange={handleKeyword}
          placeholder="搜索"
        />

        <Flex
          flex="1 0 0%"
          align="center"
          justifyContent="flex-end"
          pl="24px"
        >
          <IconButton
            variant="unstyled"
            aria-label="to home page"
            fontSize="22px"
            icon={<VscHome style={{ margin: '0 auto' }} />}
          />
          <IconButton
            variant="unstyled"
            aria-label="to home page"
            fontSize="22px"
            icon={<AiOutlineCompass style={{ margin: '0 auto' }} />}
            ml="20px"
          />
          <IconButton
            variant="unstyled"
            aria-label="to home page"
            fontSize="22px"
            icon={<VscHeart style={{ margin: '0 auto' }} />}
            ml="20px"
          />
          <IconButton
            variant="unstyled"
            aria-label="to home page"
            fontSize="22px"
            icon={<VscAccount style={{ margin: '0 auto' }} />}
            ml="20px"
            textAlign="center"
          />
        </Flex>
      </Flex>
    </Box>
  )
}
