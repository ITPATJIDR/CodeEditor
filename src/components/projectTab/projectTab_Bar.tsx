import { useState } from "react";
import { ProjectTabList, ProjectTabType } from "../../interfaces/projectTab_Interface";
import { IoMdAdd } from "react-icons/io";
import ProjectTabItem from "./projectTab_Item";
import { open } from '@tauri-apps/api/dialog';
import { extract_folder_name } from "../../utils/projectTab/projectTab_utils";


const ProjectTabBar = () => {

	const [projectItem, setProjectItem] = useState<ProjectTabList>([]);

	const onClickAddNewProject = async () => {
		const selected = await open({
			directory: true,
			multiple: true,
		})

		if (Array.isArray(selected)) {
			const folder_name = extract_folder_name(selected[0])
			const newProjectItem: ProjectTabType = {
				value: folder_name
			}
			setProjectItem([...projectItem, newProjectItem]);
		} else if (selected === null) {
			// user cancelled the selection
		} else {
			// tauri don't support select file on 2024
		}

	}

	const onClickDeleteProject = (key: number) => {
		setProjectItem(projectItem.filter((_, index) => index !== key));
	}

	return (
		<div className="flex h-12 bg-[#0c171e]">
			<div className="flex items-center">
				{projectItem.map((item: ProjectTabType, index:number) => {
					return (
						<ProjectTabItem key={index} item={item} index={index} onClickDeleteProject={onClickDeleteProject}/>
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