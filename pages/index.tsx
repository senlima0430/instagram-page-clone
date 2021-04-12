import { useState } from 'react'
import { Box } from '@chakra-ui/react'

import { usePaginatePics } from '@/hooks/usePaginatePics'
import { NormalLayout } from '@/layout/Normal'
import { Info } from '@/components/Info'
import { PicsList } from '@/components/PicsList'
import { Searchbar } from '@/components/Searchbar'

export default function Index() {
  const [query, setQuery] = useState('')
  const {
    pages,
    error,
    size,
    setSize,
    isEmpty,
    isInitial,
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
      <PicsList
        error={error}
        pages={pages}
        isEmpty={isEmpty}
        isInitial={isInitial}
        isReachingEnd={isReachingEnd}
        nextPage={toNextPage}
      />
    </NormalLayout>
  )
}
