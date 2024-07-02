import Editor from '@monaco-editor/react';
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ProjectTab from './panels/project_tab';

function App() {
  return (
    <ProjectTab>
      <PanelGroup direction='horizontal' autoSaveId="code_editor"  className='flex flex-row'>
        <Panel defaultSize={25}>
          <div className='w-full h-[100vh] bg-[#182228] text-white'>
            File system
          </div>
        </Panel>
        <PanelResizeHandle/>
        <Panel>
          <Editor
              height="100vh"
              width="100%"
              theme="vs-dark"
          />
        </Panel>
      </PanelGroup>
    </ProjectTab>
  );
}

export default App;
