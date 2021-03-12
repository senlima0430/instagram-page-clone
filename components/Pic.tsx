import { FiHeart } from 'react-icons/fi'
import {
  Box,
  Center,
  Image,
  Tooltip,
  GridItem,
  Skeleton,
  AspectRatio,
} from '@chakra-ui/react'

type PropsType = {
  pic: Record<string, any>
}

export function Pic({ pic }: PropsType) {
  return (
    <GridItem pos="relative" w="100%" overflow="hidden">
      <Box pos="absolute" top={4} right={4} zIndex="docked">
        <Tooltip
          label={`${pic.likes} likes`}
          aria-label="picture's like count"
          placement="bottom-end"
        >
          <span>
            <Center w={6} h={6} bg="white" borderRadius="full">
              <FiHeart />
            </Center>
          </span>
        </Tooltip>
      </Box>
      <Box pb="100%" overflow="hidden">
        <AspectRatio
          ratio={1 / 1}
          w="full"
          h="full"
          pos="absolute"
          top="0"
          left="0"
        >
          <Image
            objectFit="fill"
            src={pic.urls.small}
            alt={pic.description}
            fallback={<Skeleton />}
          />
        </AspectRatio>
      </Box>
    </GridItem>
  )
}
