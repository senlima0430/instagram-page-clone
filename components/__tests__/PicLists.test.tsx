import { render, screen } from '@testing-library/react'
import faker from 'faker'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'

import { PicsList } from '../PicsList'

const mockNextPage = jest.fn()

test('should render initial', () => {
  render(
    <PicsList
      error={null}
      pages={[]}
      isEmpty
      isInitial
      isReachingEnd
      nextPage={mockNextPage}
    />
  )

  expect(screen.getByText('Loading...')).toBeInTheDocument()
})

test('should render error', () => {
  render(
    <PicsList
      error={true}
      pages={[]}
      isEmpty
      isInitial={false}
      isReachingEnd
      nextPage={mockNextPage}
    />
  )

  expect(screen.getByText('Error occurred')).toBeInTheDocument()
})

test('should render empty', () => {
  render(
    <PicsList
      error={null}
      pages={[]}
      isEmpty
      isInitial={false}
      isReachingEnd
      nextPage={mockNextPage}
    />
  )

  expect(screen.getByText('Empty')).toBeInTheDocument()
  expect(screen.queryByLabelText('load more')).not.toBeInTheDocument()
})

test('should render content', () => {
  mockAllIsIntersecting(false)

  render(
    <PicsList
      error={null}
      pages={[
        {
          total: 10,
          total_pages: 2,
          results: new Array(5).fill(null).map(() => ({
            id: faker.random.uuid(),
            likes: 100,
            alt_description: 'picture for test',
            urls: {
              small: 'http://tny.im/ocl',
            },
          })),
        },
      ]}
      isEmpty={false}
      isInitial={false}
      isReachingEnd={false}
      nextPage={mockNextPage}
    />
  )

  expect(screen.getByLabelText('load more')).toBeInTheDocument()
  expect(screen.queryAllByTestId('pic-item').length).toBe(5)
})
