import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

/**
 * Redux slice for managing the 'user' state, including the list of employees.
 *
 * @typedef {Object} UserState
 * @property {Array} employees - An array containing the list of employees.
 *
 * @typedef {Object} AddEmployeeAction
 * @property {Object} payload - The data representing the employee to be added.
 *
 * @typedef {Object} ReduxSlice
 * @property {string} name - The name of the Redux slice.
 * @property {UserState} initialState - The initial state for the reducer.
 * @property {Object} reducers - An object containing reducer functions to update the state.
 *
 * @typedef {Object} ReduxActions
 * @property {Function} addEmployee - The action function to add an employee to the list.
 *
 * @typedef {Object} ReduxStore
 * @property {Function} user - The Redux reducer function for the 'user' slice.
 *
 * @typedef {Object} Store
 * @property {ReduxStore} reducer - The object containing all the reducers for the store.
 *
 * @typedef {Object} StoreInstance
 * @property {Function} getState - The function to get the current state from the store.
 * @property {Function} dispatch - The function to dispatch actions to update the state.
 *
 * @typedef {Object} ReduxStoreInstance
 * @property {StoreInstance} store - The instance of the Redux store.
 *
 * @typedef {Object} ReduxExports
 * @property {ReduxActions} actions - The object containing all the actions exported from the slice.
 *
 * @typedef {ReduxSlice & ReduxExports} UserSlice
 *
 * @type {UserSlice}
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
/**
 * Create the Redux store configuration using the 'userSlice.reducer' as the reducer
 * to manage the 'user' state in the Redux store.
 */
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
})
