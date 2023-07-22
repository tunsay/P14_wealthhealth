import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  // initial state for the reducer
  initialState: {
    employees: [],
  },
  // reducers are functions that take the current state and an action object as arguments, and return a new state
  reducers: {
    // login function is used to update the user object in the redux store when the user logs in //
    addEmployee: (state, action) => {
      // set the user object in the redux store to the user object
      state.employees.push(action.payload)
    },
  },
})
// export the addEmloyee functions
export const { addEmployee } = userSlice.actions
// export the user object from the redux store
// export const selectUser = (state) => state.user.user
// export the userSlice reducer to be used in the redux store

export default userSlice.reducer

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
})
