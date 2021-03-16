import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Searchbar } from '../Searchbar'

const mockSubmit = jest.fn()

jest.useFakeTimers()

test('should render input and can change value', async () => {
  render(<Searchbar loading={false} submitFunc={mockSubmit} />)

  const input = screen.getByLabelText('search picture') as HTMLInputElement

  expect(input).toBeInTheDocument()
  expect(input.value).toBe('mountain')
  expect(mockSubmit).not.toBeCalled()

  jest.runAllTimers()
  await waitFor(() => expect(mockSubmit).toBeCalled())

  userEvent.clear(input)
  await waitFor(() => expect(input.value).toBe(''))
})

test('should render spinner', () => {
  render(<Searchbar loading submitFunc={mockSubmit} />)

  expect(screen.getByLabelText('loading results')).toBeInTheDocument()
})
