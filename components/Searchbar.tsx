import { useState, ChangeEvent } from 'react'
import { Flex, Input } from '@chakra-ui/react'

export function Searchbar() {
  const [keyword, setKeyword] = useState('mountain')

  function handleKeyword(e: ChangeEvent<HTMLInputElement>) {
    setKeyword(e.target.value)
  }

  return (
    <Flex my={4} w="full" maxW="935px" align="center" justify="space-around">
      <Input
        size="sm"
        w="215px"
        minW="125px"
        value={keyword}
        onChange={handleKeyword}
        placeholder="Input some words..."
      />
    </Flex>
  )
}
