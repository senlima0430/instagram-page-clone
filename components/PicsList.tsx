import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Box, Skeleton, GridItem, Grid } from '@chakra-ui/react'

import { usePaginatePics } from 'hooks/usePaginatePics'
import { Pic } from './Pic'

export function PicsList() {
  const { pages, error, size, setSize, isReachingEnd } = usePaginatePics()
  const { ref, inView } = useInView({ threshold: 0.3 })

  useEffect(() => {
    if (inView && !isReachingEnd) setSize(size + 1)
  }, [inView])

  if (error) return <p>Error occurred</p>

  return (
    <Grid
      w="full"
      templateColumns="repeat(3, 1fr)"
      gap={{ base: 1, md: 7 }}
      mb={{ base: 1, md: 7 }}
    >
      {pages ? (
        <>
          {pages.map(pics =>
            pics.results.map(item => <Pic key={item.id} pic={item} />)
          )}
          <GridItem ref={ref} w="100%">
            <Box as={Skeleton} pt="100%" />
          </GridItem>
        </>
      ) : (
        <GridItem w="100%">
          <Box as={Skeleton} pt="100%" />
        </GridItem>
      )}
    </Grid>
  )
}
