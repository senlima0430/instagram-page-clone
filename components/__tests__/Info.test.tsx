import { render, screen } from '@testing-library/react'

import { Info } from '../Info'

test('should render text', () => {
  render(<Info />)

  expect(screen.getByLabelText('introduction')).toBeInTheDocument()
})
