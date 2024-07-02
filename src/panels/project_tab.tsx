import { ProjectTabProps } from "../interfaces/projectTab_Interface";
import ProjectTabBar from "../components/projectTab/projectTab_Bar";


const ProjectTab = ({ children }: ProjectTabProps) => {
	return (
		<div>
			<ProjectTabBar/> 
			{children}
		</div>
	)
}

export default ProjectTab