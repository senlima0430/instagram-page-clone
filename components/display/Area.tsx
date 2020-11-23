import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Box, Spinner, GridItem, SimpleGrid } from '@chakra-ui/react'

import { usePaginatePics } from 'hooks/useRequests'
import { DisplayItem } from './Item'

export function DisplayArea() {
  const { pages, error, size, setSize, isReachingEnd } = usePaginatePics()
  const { ref, inView } = useInView({ threshold: 0.3 })

  useEffect(() => {
    if (inView && !isReachingEnd) setSize(size + 1)
  }, [inView])

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
      <GridItem ref={ref} pos="relative" w="100%" h="100%">
        <Box pt="100%" />
      </GridItem>
    </SimpleGrid>
  )
}
