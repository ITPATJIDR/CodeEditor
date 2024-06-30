import { ReactNode } from "react"

interface ProjectTabProps {
	children: ReactNode
}

const ProjectTab = ({ children }: ProjectTabProps) => {
	return (
		<div>
			<div>Hi</div>
			{children}
		</div>
	)
}

export default ProjectTab