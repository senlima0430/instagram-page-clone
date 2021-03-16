import { render, screen } from '@testing-library/react'

import { NormalLayout } from '../Normal'

test('should render children', () => {
  render(
    <NormalLayout>
      <p>hello</p>
    </NormalLayout>
  )

  expect(screen.getByText('hello')).toBeInTheDocument()
})
