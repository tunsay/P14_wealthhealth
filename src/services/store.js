import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/userSlice'

/**
 * Create the Redux store configuration using the 'userSlice.reducer' as the reducer
 * to manage the 'user' state in the Redux store.
 */
export const store = configureStore({
  reducer: {
    user: userSlice,
  },
})
