import { createSlice } from '@reduxjs/toolkit'
import type { NewsLetterState } from './newsLetterTypes'
import { subscribeEmail } from './newsLetterThunks'

const initialState: NewsLetterState = {
  subscribed: false,
  loading: false,
  error: null,
}

const newsLetterSlice = createSlice({
  name: 'newsletter',
  initialState,
  reducers: {
    setSubscribed(state, action) {
      state.subscribed = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(subscribeEmail.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(subscribeEmail.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || 'Subscription was unlucky'
      })
      .addCase(subscribeEmail.fulfilled, (state) => {
        state.loading = false
        state.subscribed = true
      })
  },
})

export const { setSubscribed } = newsLetterSlice.actions
export default newsLetterSlice.reducer
