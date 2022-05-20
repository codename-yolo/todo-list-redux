import { configureStore } from '@reduxjs/toolkit'
import filtersSlice from '../components/Filters/filtersSlice'
import todoSlice from '../components/TodoList/todoSlice'
console.log('store run')

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todoSlice.reducer,
  },
})
store.subscribe(() => {
  console.log(store.getState())
})
console.log(store)
export default store
