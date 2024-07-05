import { CiFileOn } from "react-icons/ci";
import { IoIosGitBranch } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { VscExtensions } from "react-icons/vsc";

const Menu = () => {
	return (
		<div className='
			w-[5vw] h-[100vh] p-2 bg-[#0d171f] 
			text-white border-r-2 border-[#242d35]
			flex flex-col items-center
		'>
			<div className="w-10 h-10 m-2 flex items-center justify-center">
				<CiFileOn className="w-[32px] h-[32px]"/>
			</div>
			<div className="w-10 h-10 m-2 flex items-center justify-center">
				<AiOutlineSearch color="#9fa2a4" className="w-[32px] h-[32px]"/>
			</div>
			<div className="w-10 h-10 m-2 flex items-center justify-center">
				<IoIosGitBranch color="#9fa2a4" className="w-[32px] h-[32px]"/>
			</div>
			<div className="w-10 h-10 m-2 flex items-center justify-center">
				<VscExtensions color="#9fa2a4" className="w-[32px] h-[32px]"/>
			</div>
		</div>
	)
}

export default Menu