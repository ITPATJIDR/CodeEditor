import { CiFileOn } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const ProjectTabItem = () => {

	return (
		<div className="flex flex-col w-[182px] bg-[#182228] text-white items-center rounded-t-lg ml-2">
			<div className="flex items-center justify-around mt-2 w-[140px]">
				<div className="flex items-center w-[120px] pr-5">
					<CiFileOn className="w-10" />
					<div className="pl-2 font-PJ">Portfolio</div>
				</div>
				<IoClose />
			</div>
			<span className="w-[182px] h-[3px] mt-1  bg-[#0065B8]"></span>
		</div>
	)
}

export default ProjectTabItem;