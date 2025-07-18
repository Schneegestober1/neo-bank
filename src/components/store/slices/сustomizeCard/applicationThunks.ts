import { createAsyncThunk } from '@reduxjs/toolkit'
import type { FormValues } from '../../../loan/CustomizeCard/CustomizeCardTypes'
import { postApplication } from './applicationAPI'

export const submitApplication = createAsyncThunk(
  'application/submit',
  async (data: FormValues, { rejectWithValue }) => {
    try {
      const result = await postApplication(data)
      return result
    } catch (error) {
      let message = 'Unknown error'
      if (error instanceof Error) {
        message = error.message
      }
      return rejectWithValue(message)
    }
  }
)
