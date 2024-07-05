import Editor from '@monaco-editor/react';
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ProjectTab from './panels/project_tab';
import Menu from './panels/menu';
import Explorer from './panels/explorer';

function App() {
  return (
    <ProjectTab>
      <PanelGroup direction='horizontal' autoSaveId="code_editor"  className='flex flex-row'>
        <Menu></Menu>
        <Panel defaultSize={25}>
          <Explorer/>
        </Panel>
        <PanelResizeHandle/>
        <Panel>
          <Editor
              height="100vh"
              width="100%"
              theme="vs-dark"
              language='javascript'
          />
        </Panel>
      </PanelGroup>
    </ProjectTab>
  );
}

export default App;
