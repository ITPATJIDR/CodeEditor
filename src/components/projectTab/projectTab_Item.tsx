import { CiFolderOn } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { ProjectTabItemProps } from "../../interfaces/projectTab_Interface";


const ProjectTabItem: React.FC<ProjectTabItemProps> = ({ item, index, onClickDeleteProject }) => {
	return (
		<div className="flex flex-col bg-[#182228] text-white items-center rounded-t-lg ml-2">
			<div className="flex items-center justify-around mt-2 h-8 w-[100%]">
				<div className="flex items-center">
					<CiFolderOn className="w-10" />
					<div className="font-PJ">{item.value}</div>
					<IoClose className="w-10" onClick={() => onClickDeleteProject(index)} />
				</div>
			</div>
			<span className="w-[100%] h-[3px] mt-1  bg-[#0065B8]"></span>
		</div>
	)
}

export default ProjectTabItem;