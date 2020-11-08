import dynamic from 'next/dynamic'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { Spinner, Box, SimpleGrid, GridItem, Skeleton } from '@chakra-ui/core'

import { usePaginatePics } from 'hooks/useRequests'

const DisplayItem = dynamic(
  async () => await (await import('./Item')).DisplayItem,
  {
    loading: () => (
      <GridItem w="100%" pos="relative" overflow="hidden">
        <Skeleton pos="absolute" top="0" left="0" w="100%" h="100%" />
      </GridItem>
    ),
  }
)

export function DisplayArea() {
  const { pages, error, size, setSize, isReachingEnd } = usePaginatePics()

  useScrollPosition(
    ({ currPos }) => {
      const newSize =
        Math.round((currPos.y * -1) / (window.innerHeight * 0.7)) + 1
      if (newSize > 0 && !isReachingEnd && size < newSize) setSize(newSize)
    },
    [size]
  )

  if (error) return <p>Error occurred</p>

  if (!pages) {
    return (
      <Box w="100%" mt="5h">
        <Spinner mx="auto" size="lg" />
      </Box>
    )
  }

  return (
    <SimpleGrid w="100%" columns={3} spacing={{ base: '3px', md: '28px' }}>
      {pages.map(pics =>
        pics.results.map(item => <DisplayItem key={item.id} pic={item} />)
      )}
    </SimpleGrid>
  )
}
