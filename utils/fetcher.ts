import { CustomError } from 'ts-custom-error'

export class FetcherError extends CustomError {
  info?: any
  status?: number

  public constructor(message?: string) {
    super(message)
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
