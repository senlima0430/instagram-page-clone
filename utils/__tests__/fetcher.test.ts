import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { fetcher } from '../fetcher'

const server = setupServer(
  rest.get('https://api.backend.dev/ping', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ result: 'pong' }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('should handle response', async () => {
  const res = await fetcher('https://api.backend.dev/ping')

  expect(res.result).toBe('pong')
})

test('should handle error', async () => {
  server.use(
    rest.get('https://api.backend.dev/ping', (_req, res, ctx) => {
      return res(ctx.status(500), ctx.json({ message: "server's fault" }))
    })
  )

  try {
    await fetcher('https://api.backend.dev/ping')
  } catch (err) {
    expect(err.status).toBe(500)
    expect(err.info.message).toBe("server's fault")
  }
})
