import { createSlice } from '@reduxjs/toolkit'
import { fetchNews } from './newsThunks'
import type { NewsState } from './newsTypes'

const initialState: NewsState = {
  items: [],
  loading: false,
  error: null,
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'Ошибка при загрузке новостей :('
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.items = action.payload
        state.loading = false
      })
  },
})

export default newsSlice.reducer
