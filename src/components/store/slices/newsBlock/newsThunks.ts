import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { Article } from './newsTypes'

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const API_KEY = '015aabfb816c4e12906b3a3e0f6160bc'
  const URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`

  const response = await axios.get(URL)
  const articles: Article[] = response.data.articles
  console.log(articles)

  const filtred = articles.filter((article) => {
    const hasValidImage = article.urlToImage && !article.urlToImage.includes('null')
    const isDescTextOnly = article.description && !article.description.includes('<')
    return hasValidImage && isDescTextOnly
  })

  return filtred.slice(0, 20).map((item) => ({
    title: item.title,
    desc: item.description,
    url: item.url,
    urlImage: item.urlToImage ?? '',
  }))
})
