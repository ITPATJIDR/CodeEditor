import { useState } from "react";
import { ProjectTabList, ProjectTabType } from "../../interfaces/projectTab_Interface";
import { IoMdAdd } from "react-icons/io";
import ProjectTabItem from "./projectTab_Item";

const ProjectTabBar = () => {

	const [projectItem, setProjectItem] = useState<ProjectTabList>([]);

	const onClickAddNewProject = () => {
		const newProjectItem: ProjectTabType = {
			value: 1
		}
		setProjectItem([...projectItem, newProjectItem]);
	}

	return (
		<div className="flex h-12 pt-2 bg-[#0c171e]">
			<div className="flex items-center">
				{projectItem.map((item: ProjectTabType) => {
					console.log(item)
					return (
						<ProjectTabItem/>
					)
				})}
				<div className="w-10 h-5 flex items-center justify-center">
					<IoMdAdd onClick={() => onClickAddNewProject()} color="white" className="w-10" />
				</div>
			</div>
		</div>
	)
}

export default ProjectTabBar;