import { createSlice } from '@reduxjs/toolkit'

export const saveBookSlice = createSlice({
  name: 'book',
  initialState: {
    booking: []
  },
  reducers: {
    addBooking: (state, action) => {
      state.booking.push({ ...action.payload })
    }
  }
})

export const { addBooking } = saveBookSlice.actions

export default saveBookSlice.reducer
