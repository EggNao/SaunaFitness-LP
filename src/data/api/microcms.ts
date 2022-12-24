import { client } from '~/plugins/microcms'

export const getNewsData = async () => {
  const data = await client.get({
    endpoint: 'news',
    queries: {
      limit: 1000,
      offset: 0,
    },
  })
  return data.contents
}
