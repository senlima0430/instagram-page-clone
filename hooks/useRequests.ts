import useSWR, { useSWRInfinite } from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())
const baseUrl = 'https://api.unsplash.com'

type PicsResponseType = {
  results: Array<Record<string, any>>
  total: number
  total_pages: number
}

export const useGetPics = () => {
  const url =
    baseUrl +
    `/search/photos?query=mountain&per_page=12&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS}`

  const { data: pics, error } = useSWR<PicsResponseType>(url, fetcher)

  return { pics, error }
}

export const usePaginatePics = () => {
  const url = `${baseUrl}/search/photos?query=mountain&per_page=12&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS}`

  const { data, error, size, setSize } = useSWRInfinite(
    index => `${url}&page=${index + 1}`,
    fetcher
  )

  const pages: PicsResponseType[] = data ? [].concat(...data) : []
  const isLoadingInitialData = !data && !error
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined')
  const isEmpty = data?.[0]?.results.length === 0
  const isReachingEnd = isEmpty || data?.length === data?.[0]?.total_pages

  return { pages, error, isLoadingMore, size, setSize, isReachingEnd }
}
