class FetcherError extends Error {
  info?: any
  status?: number

  constructor(message: string) {
    super(message)
    this.name = 'ValidationError'
  }
}

export const fetcher = async (url: string) => {
  const res = await fetch(url)

  if (!res.ok) {
    const error = new FetcherError(
      'An error occurred while fetching the data.'
    )
    error.info = await res.json()
    error.status = res.status

    throw error
  }

  return res.json()
}
