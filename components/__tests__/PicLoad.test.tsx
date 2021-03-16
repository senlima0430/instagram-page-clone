import { render, screen, waitFor } from '@testing-library/react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'

import { PicLoad } from '../PicLoad'

const mockLoadFunc = jest.fn()

test('should render block', () => {
  render(<PicLoad loadFunc={mockLoadFunc} />)

  mockAllIsIntersecting(false)

  expect(screen.getByLabelText('load more')).toBeInTheDocument()
  expect(mockLoadFunc).not.toBeCalled()
})

test('should send load function when in view', async () => {
  render(<PicLoad loadFunc={mockLoadFunc} />)

  mockAllIsIntersecting(true)

  await waitFor(() => expect(mockLoadFunc).toBeCalled())
})
