import { useState } from 'react'
import { GridItem, Box, Skeleton, Image } from '@chakra-ui/core'

type PropsType = {
  pic: Record<string, any>
}

export function DisplayItem({ pic }: PropsType) {
  const [isLoaded, setLoaded] = useState<boolean>(false)

  return (
    <GridItem pos="relative" w="100%" overflow="hidden">
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
