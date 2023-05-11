import { Viewer } from '@react-pdf-viewer/core';
import { dropPlugin } from '@react-pdf-viewer/drop';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/drop/lib/styles/index.css';

// Render
const dropPluginInstance = dropPlugin();

<div
  style={{
    border: '1px solid rgba(0, 0, 0, 0.3)',
    display: 'flex',
    height: '750px',
  }}
>
  <Viewer fileUrl="..." plugins={[dropPluginInstance]} />
</div>;