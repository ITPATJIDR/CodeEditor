import Editor from '@monaco-editor/react';
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ProjectTab from './panels/project_tab';
import Menu from './panels/menu';
import Explorer from './panels/explorer';
import { selectProjectTab } from './store/feature/project_tab_slice';
import { useSelector } from 'react-redux';
import { FiHexagon } from "react-icons/fi";

function App() {
	const projectTab = useSelector(selectProjectTab)

  return (
    <ProjectTab>
      <PanelGroup direction='horizontal' autoSaveId="code_editor"  className='flex flex-row'>
        <Menu></Menu>
        <Panel defaultSize={25}>
          <Explorer/>
        </Panel>
        <PanelResizeHandle/>
        <Panel className='bg-[#0c171e]'>
          {projectTab.items.length != 0 ?
            <Editor
                height="100vh"
                width="100%"
                theme="vs-dark"
                language='javascript'
            />
          :
          <div className='h-[99vh] flex items-center justify-center'>
            <FiHexagon color='#9fa2a4' className='w-[50vw] h-[50vh]'/>
          </div>
          }
        </Panel>
      </PanelGroup>
    </ProjectTab>
  );
}

export default App;
