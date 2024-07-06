import { ReactNode } from "react";

export interface ProjectTabProps {
	children: ReactNode
}

export interface ProjectTabType {
	value: string
}

export interface ProjectTabItemProps {
	item: ProjectTabType;
	index: number
	onSelectProjectTab: string
	onClickDeleteProject: (key: number) => void
	onClickSelectProjectTab: (value: string) => void
}

export interface ProjectTabState {
  items: ProjectTabType[]
}

export type ProjectTabList = ProjectTabType[]