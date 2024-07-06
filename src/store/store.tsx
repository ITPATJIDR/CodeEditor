import { configureStore } from '@reduxjs/toolkit'
import { projectTabReducer } from './feature/project_tab_slice'

export const store = configureStore({
  reducer: {
	projectTab: projectTabReducer.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch