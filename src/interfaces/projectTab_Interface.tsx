import { ReactNode } from "react";

export interface ProjectTabProps {
	children: ReactNode
}

export interface ProjectTabType {
	value: number
}

export type ProjectTabList = ProjectTabType[]