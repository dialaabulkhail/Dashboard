import React from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

import { Header } from '../components';

const Editor = () => (
  <div className="p-2 m-2 mt-24 bg-cyan-700/10 md:m-10 md:p-10 rounded-3xl">
    <Header title="Editor" />
    <RichTextEditorComponent>
      <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
    </RichTextEditorComponent>
  </div>
);
export default Editor;