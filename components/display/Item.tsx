import { useState } from 'react'
import { FiHeart, FiDownload } from 'react-icons/fi'
import {
  Box,
  Flex,
  Text,
  Image,
  VStack,
  GridItem,
  Skeleton,
  IconButton,
} from '@chakra-ui/core'

type PropsType = {
  pic: Record<string, any>
}

export function DisplayItem({ pic }: PropsType) {
  const [isLoaded, setLoaded] = useState<boolean>(false)
  const [showAuthor, setShowAuthor] = useState<boolean>(false)

  return (
    <GridItem
      pos="relative"
      w="100%"
      overflow="hidden"
      onMouseEnter={() => setShowAuthor(true)}
      onMouseLeave={() => setShowAuthor(false)}
    >
      <VStack
        opacity={showAuthor ? 1 : 0}
        pos="absolute"
        top={0}
        left={0}
        zIndex={2}
        w="100%"
        h="100%"
        p="0.5em"
        color="white"
        background="rgba(0,0,0,0.25)"
      >
        <Flex h="100%" align="center" justify="center">
          <FiHeart style={{ marginRight: '0.5em' }} /> {pic.likes}
          <a
            href={pic.links.download}
            target="_blank"
            rel="noreferrer"
            download
            style={{ marginLeft: '1em', display: 'block' }}
          >
            <IconButton
              size=""
              variant="unstyled"
              aria-label="download picture"
              icon={<FiDownload />}
            />
          </a>
        </Flex>
        <Text
          pos="absolute"
          left="0.5em"
          bottom="0.5em"
          fontSize={{ base: '12px', md: '1rem' }}
        >
          Photo by{' '}
          <a
            rel="noreferrer noopener"
            href={pic.user.links.html}
            style={{ color: 'white' }}
          >
            {pic.user.name ?? 'Unknown'}
          </a>
        </Text>
      </VStack>
      <Box pb="100%" overflow="hidden">
        <Image
          pos="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          objectFit="cover"
          src={pic.urls.small}
          alt={pic.description}
          onLoad={() => setLoaded(true)}
        />
      </Box>
      {!isLoaded && (
        <Skeleton pos="absolute" top="0" left="0" w="100%" h="100%" />
      )}
    </GridItem>
  )
}
