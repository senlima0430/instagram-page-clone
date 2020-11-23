import { Flex, IconButton } from '@chakra-ui/react'
import { BsGrid3X3, BsTv, BsPersonSquare } from 'react-icons/bs'

export function GenreGroup() {
  return (
    <Flex
      h="44px"
      borderTop="1px solid #dbdbdb"
      borderBottom="1px solid #dbdbdb"
      fontSize="0.9rem"
    >
      <IconButton
        isRound={false}
        flex="1"
        aria-label="all picture"
        variant="ghost"
        fontSize="24px"
        icon={<BsGrid3X3 />}
      />
      <IconButton
        flex="1"
        aria-label="video"
        variant="ghost"
        color="#718096"
        fontSize="24px"
        icon={<BsTv />}
      />
      <IconButton
        flex="1"
        aria-label="tagged"
        variant="ghost"
        color="#718096"
        fontSize="24px"
        icon={<BsPersonSquare />}
      />
    </Flex>
  )
}
