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
	onClickDeleteProject: (key: number) => void
}

export type ProjectTabList = ProjectTabType[]