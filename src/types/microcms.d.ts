export type NewsTypw = {
  contents: [
    {
      id: string
      title: string
      createdAt: string
      publishedAt: string
      revisedAt: string
      updatedAt: string
      url: string
    }
  ]
  limit: number
  offset: number
  totalCount: number
}
