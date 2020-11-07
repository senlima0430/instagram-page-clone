import { Spinner, Box, SimpleGrid } from '@chakra-ui/core'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { usePaginatePics } from 'hooks/useRequests'
import { DisplayItem } from './Item'

export function DisplayArea() {
  const { pages, error, size, setSize, isReachingEnd } = usePaginatePics()

  useScrollPosition(
    ({ currPos }) => {
      const newSize = Math.round((currPos.y * -1) / window.innerHeight) + 1
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
