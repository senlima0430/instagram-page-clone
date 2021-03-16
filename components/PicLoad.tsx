import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Box, Skeleton, GridItem } from '@chakra-ui/react'

type PropsType = {
  loadFunc: () => void
}

export function PicLoad({ loadFunc }: PropsType) {
  const { ref, inView } = useInView({ threshold: 0.3 })

  useEffect(() => {
    if (inView) loadFunc()
  }, [inView])

  return (
    <GridItem ref={ref} w="100%" aria-label="load more">
      <Box as={Skeleton} pt="100%" />
    </GridItem>
  )
}
