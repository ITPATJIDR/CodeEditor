import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProjectTabState, ProjectTabType } from "../../interfaces/projectTab_Interface";
import { RootState } from "../store";

const initialState: ProjectTabState = {
	items: []
};

export const projectTabReducer = createSlice({
  name: "projectTab",
  initialState,
  reducers: {
    addNewProjectTab: (state, action: PayloadAction<ProjectTabType>) => {
      state.items.push(action.payload)
    },
    deleteProjectTabByKey: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((_, index) => index !== action.payload)
    },
  },
});

export const { addNewProjectTab, deleteProjectTabByKey } = projectTabReducer.actions;

export const selectProjectTab = (state: RootState) => state.projectTab
export const selectProjectTabByKey = (key: number) => (state: RootState): ProjectTabType | undefined => {
  return state.projectTab.items[key]
}
