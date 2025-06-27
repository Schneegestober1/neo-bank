export type NewsItem = {
  title: string
  desc: string
  url: string
  urlImage: string
}

export type NewsState = {
  items: NewsItem[]
  loading: boolean
  error: string | null
}

export type Article = {
  title: string
  description: string
  url: string
  urlToImage: string | null
}
