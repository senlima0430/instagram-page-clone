import { Text, Grid } from '@chakra-ui/react'

import { Pic } from '@/components/Pic'
import { PicLoad } from '@/components/PicLoad'
import { PicsResponseType } from '@/interfaces'

type PropsType = {
  error: any
  pages: PicsResponseType[]
  isEmpty: boolean
  isInitial: boolean
  isReachingEnd: boolean
  nextPage: () => void
}

export function PicsList({
  pages,
  error,
  isEmpty,
  isInitial,
  isReachingEnd,
  nextPage,
}: PropsType) {
  if (isInitial) return <Text>Loading...</Text>
  if (error) return <Text>Error occurred</Text>

  return (
    <Grid
      w="full"
      mb={{ base: 1, md: 7 }}
      gap={{ base: 1, md: 7 }}
      templateColumns="repeat(3, 1fr)"
    >
      {isEmpty && <Text>Empty</Text>}
      {pages.map(pics =>
        pics.results.map(item => (
          <Pic key={item.id} pic={item} data-testid="pic-list-item" />
        ))
      )}
      {!isReachingEnd && <PicLoad loadFunc={nextPage} />}
    </Grid>
  )
}
