import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react'

import { Pic } from '../Pic'

const data = {
  likes: 100,
  alt_description: 'picture for test',
  urls: {
    small: 'http://tny.im/ocl',
  },
}

describe('<Pic />', () => {
  it('should render pic', async () => {
    render(<Pic pic={data} />)

    const heartIcon = screen.getByLabelText("picture's like count")

    userEvent.hover(heartIcon)

    await waitFor(() =>
      expect(screen.getByText('100 likes')).toBeInTheDocument()
    )
  })
})
