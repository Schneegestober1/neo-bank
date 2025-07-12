import { createSlice } from "@reduxjs/toolkit"
import { submitApplication } from "./applicationThunks"


type ApplicationState = {
  loading: boolean
  error: string | null
  success: boolean
}

const initialState: ApplicationState = {
  loading: false,
  error: null,
  success: false,
}

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    resetApplicationStatus: (state) => {
      state.loading = false
      state.error = null
      state.success = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitApplication.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(submitApplication.fulfilled, (state) => {
        state.loading = false
        state.success = true
      })
      .addCase(submitApplication.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { resetApplicationStatus } = applicationSlice.actions
export default applicationSlice.reducer
