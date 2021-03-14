import { useState } from 'react'
import { Text, Box, Grid } from '@chakra-ui/react'

import { usePaginatePics } from '@/hooks/usePaginatePics'
import { NormalLayout } from '@/layout/Normal'
import { Info } from '@/components/Info'
import { Searchbar } from '@/components/Searchbar'
import { Pic } from '@/components/Pic'
import { PicLoad } from '@/components/PicLoad'

export default function Index() {
  const [query, setQuery] = useState('mountain')
  const {
    pages,
    error,
    size,
    setSize,
    isEmpty,
    isLoading,
    isReachingEnd,
  } = usePaginatePics(query)

  const toNextPage = () => {
    if (!isReachingEnd) setSize(size + 1)
  }

  const updateQuery = (val: string) => setQuery(val)

  return (
    <NormalLayout>
      <Info />
      <Box mb={8} w="70%" maxW="300px">
        <Searchbar loading={isLoading} submitFunc={updateQuery} />
      </Box>
      {error ? (
        <Text>Error occurred</Text>
      ) : pages ? (
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
          {!isReachingEnd && <PicLoad loadFunc={toNextPage} />}
        </Grid>
      ) : (
        <Text>Loading...</Text>
      )}
    </NormalLayout>
  )
}
