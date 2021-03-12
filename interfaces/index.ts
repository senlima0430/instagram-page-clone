// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them.

export type PicsResponseType = {
  results: Array<Record<string, any>>
  total: number
  total_pages: number
}
