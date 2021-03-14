import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import { Searchbar } from '../Searchbar'

describe('<Searchbar />', () => {
  it('should render search bar', async () => {
    render(<Searchbar />)

    const searchbar = screen.getByLabelText(
      'search picture'
    ) as HTMLInputElement

    expect(searchbar).toBeInTheDocument()
    expect(searchbar.value).toBe('mountain')
  })

  it('should handle input change', async () => {
    render(<Searchbar />)

    const searchbar = screen.getByLabelText(
      'search picture'
    ) as HTMLInputElement

    userEvent.clear(searchbar)
    userEvent.type(searchbar, 'test')

    expect(searchbar.value).toBe('test')
  })
})
