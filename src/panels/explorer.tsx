import SearchBar from "../components/explorer/search_bar";
import SelectBranch from "../components/explorer/select_branch";

const Explorer = () => { 
	return (
          <div className='w-full h-[100vh] p-2 bg-[#0d171f] text-white border-r-2 border-[#242d35]'>
	    <SelectBranch/>
	    <SearchBar/>
            <div>
              file system
            </div>
          </div>
	)
}

export default Explorer;