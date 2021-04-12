import { render, screen, waitFor } from '@testing-library/react'
import { fakeSchedulers } from 'rxjs-marbles/jest'
import userEvent from '@testing-library/user-event'

import { Searchbar } from '../Searchbar'

const mockSubmit = jest.fn()

jest.useFakeTimers()

test(
  'should render input and can change value',
  fakeSchedulers(async advance => {
    render(<Searchbar loading={false} submitFunc={mockSubmit} />)

    const input = screen.getByLabelText('search picture') as HTMLInputElement

    expect(input).toBeInTheDocument()
    expect(input.value).toBe('')
    expect(mockSubmit).not.toBeCalled()

    userEvent.type(input, 'test')

    advance(750)
    await waitFor(() => expect(input.value).toBe('test'))
    await waitFor(() => expect(mockSubmit).toBeCalled())

    userEvent.clear(input)
    await waitFor(() => expect(input.value).toBe(''))
  })
)

test('should render spinner', () => {
  render(<Searchbar loading submitFunc={mockSubmit} />)

  expect(screen.getByLabelText('loading results')).toBeInTheDocument()
})
