import { createAsyncThunk } from '@reduxjs/toolkit'
import type {
  SubscribeEmailThunkArg,
  SubscribeEmailThunkPayload,
  SubscribeEmailThunkReject,
} from './newsLetterTypes'

export const subscribeEmail = createAsyncThunk<
  SubscribeEmailThunkPayload,
  SubscribeEmailThunkArg,
  { rejectValue: SubscribeEmailThunkReject }
>('newsletter/subscribeEmail', async (email, thunkAPI) => {
  try {
    const response = await fetch('/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    if (!response.ok) {
      return thunkAPI.rejectWithValue('Failed to subscribe!')
    }
  } catch {
    return thunkAPI.rejectWithValue('Network error')
  }
})
