import { CiFolderOn } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { ProjectTabItemProps } from "../../interfaces/projectTab_Interface";

const ProjectTabItem: React.FC<ProjectTabItemProps> = ({ 
	item, 
	index, 
	onClickDeleteProject, 
	onClickSelectProjectTab, 
	onSelectProjectTab 
}) => {
	return (
		<div className={ `flex flex-col bg-${onSelectProjectTab === item.value ? "[#182228]" : "[#0c171e]"} text-white items-center rounded-t-lg ml-2`}
		onClick={() => onClickSelectProjectTab(item.value)} 
		>
			<div className="flex items-center justify-around mt-2 h-8 w-[100%]">
				<div className="flex items-center">
					<CiFolderOn className="w-10" />
					<div className="font-PJ">{item.value}</div>
					<IoClose className="w-10" onClick={() => onClickDeleteProject(index)} />
				</div>
			</div>
			{ onSelectProjectTab === item.value ?
			<span className="w-[100%] h-[3px] mt-1  bg-[#0065B8]"></span>
			:
			<span className="w-[100%] mt-2"></span>
			}
		</div>
	)
}

export default ProjectTabItem;