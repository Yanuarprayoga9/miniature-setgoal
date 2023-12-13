import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../feature/auth/authSlice.js'

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});