import { configureStore } from '@reduxjs/toolkit'
import SaveBookSlice, { saveBookSlice } from './SaveBookSlice'

export default configureStore({
  reducer: {
    book: SaveBookSlice
  }
})
