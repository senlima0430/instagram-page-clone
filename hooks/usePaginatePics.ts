import { useSWRInfinite } from 'swr'

import { BASE_URL } from '@/constants'
import { fetcher } from '@/utils/fetcher'
import { PicsResponseType } from '@/interfaces'

const { NEXT_PUBLIC_UNSPLASH_ACCESS } = process.env

export const usePaginatePics = (query: string) => {
  const url = `${BASE_URL}/search/photos?query=${query}&per_page=12&client_id=${NEXT_PUBLIC_UNSPLASH_ACCESS}`

  const { data, error, size, setSize } = useSWRInfinite(
    index => `${url}&page=${index + 1}`,
    fetcher
  )

  const pages: PicsResponseType[] = data ? [].concat(...data) : []

  const isInitial = !data && !error

  const isLoadingMore =
    isInitial || (size > 0 && data && typeof data[size - 1] === 'undefined')

  const isEmpty = data?.[0]?.results.length === 0

  const isReachingEnd = isEmpty || data?.length === data?.[0]?.total_pages

  return {
    pages,
    error,
    size,
    isEmpty,
    setSize,
    isReachingEnd,
    isLoading: isLoadingMore || isInitial,
  }
}
