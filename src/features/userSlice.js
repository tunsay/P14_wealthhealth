import { createSlice } from '@reduxjs/toolkit'

/**
 * Redux slice for managing the 'user' state, including the list of employees.
 *
 * @param {Object} state - The current state managed by the 'user' slice.
 * @param {Object} action - The action dispatched to update the state.
 *
 */
export const userSlice = createSlice({
  // The name of the Redux slice
  name: 'user',
  // The initial state for the reducer
  initialState: {
    employees: [], // Initialize the 'employees' array as an empty array
  },
  // Reducer functions to handle actions and update the state
  reducers: {
    addEmployee: (state, action) => {
      // Push the new employee data to the 'employees' array in the state
      state.employees.push(action.payload)
    },
  },
})
// Export the 'addEmployee' action function from the Redux slice
export const { addEmployee } = userSlice.actions

export default userSlice.reducer
