import { ProjectTabType } from "../../interfaces/projectTab_Interface";
import { IoMdAdd } from "react-icons/io";
import ProjectTabItem from "./projectTab_Item";
import { open } from '@tauri-apps/api/dialog';
import { invoke } from "@tauri-apps/api/tauri";
import { extract_folder_name } from "../../utils/projectTab/projectTab_utils";
import { useDispatch, useSelector } from "react-redux";
import { addNewProjectTab, deleteProjectTabByKey, selectProjectTab } from "../../store/feature/project_tab_slice";
import { useState } from "react";


const ProjectTabBar = () => {

	const [onSelectProjectTab,setOnSelectProjectTab] = useState<string>("")
	const dispatch = useDispatch()
	const projectTab = useSelector(selectProjectTab)

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
			await invoke('folder_path', { "path": selected[0] }).then(msg => {
				console.log(msg);
			})
			dispatch(addNewProjectTab(newProjectItem))
			console.log(projectTab)
		} else if (selected === null) {
			// user cancelled the selection
		} else {
			// tauri don't support select file on 2024
		}

	}

	const onClickDeleteProject = (key: number) => {
		dispatch(deleteProjectTabByKey(key))
	}

	const onClickSelectProjectTab = (value: string) => {
		setOnSelectProjectTab(value)
	}

	return (
		<div className="flex h-12 bg-[#0c171e] border-b-2 border-[#242d35]">
			<div className="flex items-center">
				{projectTab.items.map((item: ProjectTabType, index:number) => {
					return (
						<ProjectTabItem 
							key={index}
							item={item} 
							index={index} 
							onClickDeleteProject={onClickDeleteProject}
							onClickSelectProjectTab={onClickSelectProjectTab}
							onSelectProjectTab={onSelectProjectTab}
						/>
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