import { ReactNode } from "react"
import { IoMdAdd } from "react-icons/io";
import { CiFileOn } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

interface ProjectTabProps {
	children: ReactNode
}

const ProjectTab = ({ children }: ProjectTabProps) => {
	return (
		<div>
			<div className="flex h-12 pl-2 pt-2 bg-[#0c171e]">
				<div className="flex items-center">
					<div className="flex flex-col w-[182px] bg-[#182228] text-white items-center rounded-t-lg">
						<div className="flex items-center justify-around mt-2 w-[140px]">
							<div className="flex items-center w-[120px] pr-5">
								<CiFileOn className="w-10" />
								<div className="pl-2 font-PJ">Portfolio</div>
							</div>
							<IoClose/>
						</div>
						<span className="w-[182px] h-[3px] mt-1  bg-[#0065B8]"></span>
					</div>
					<IoMdAdd color="white" className="w-10"/>
				</div>
			</div>
			{children}
		</div>
	)
}

export default ProjectTab