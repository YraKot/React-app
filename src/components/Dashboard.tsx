import React from 'react';
import { Responsive, WidthProvider } from "react-grid-layout";
import { useDispatch, useSelector } from 'react-redux';
import { saveLayouts } from '../reducers';
import type { RootState } from '../store';
import Widget from './Widget';
import WidgetEditor from './WidgetEditor';
import ReduxDebug from './ReduxDebug';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

// Default layout configuration
const defaultLayouts = {
  lg: [
    { i: "1", x: 0, y: 0, w: 6, h: 4 },
    { i: "2", x: 6, y: 0, w: 6, h: 4 },
    { i: "3", x: 0, y: 4, w: 4, h: 4 },
    { i: "4", x: 4, y: 4, w: 4, h: 4 },
    { i: "5", x: 8, y: 4, w: 4, h: 4 },
    { i: "6", x: 0, y: 8, w: 6, h: 4 },
    { i: "7", x: 6, y: 8, w: 6, h: 4 }
  ],
  md: [
    { i: "1", x: 0, y: 0, w: 5, h: 4 },
    { i: "2", x: 5, y: 0, w: 5, h: 4 },
    { i: "3", x: 0, y: 4, w: 4, h: 4 },
    { i: "4", x: 4, y: 4, w: 6, h: 4 },
    { i: "5", x: 0, y: 8, w: 4, h: 4 },
    { i: "6", x: 4, y: 8, w: 6, h: 4 },
    { i: "7", x: 0, y: 12, w: 10, h: 4 }
  ],
  sm: [
    { i: "1", x: 0, y: 0, w: 6, h: 4 },
    { i: "2", x: 0, y: 4, w: 6, h: 4 },
    { i: "3", x: 0, y: 8, w: 6, h: 4 },
    { i: "4", x: 0, y: 12, w: 6, h: 4 },
    { i: "5", x: 0, y: 16, w: 6, h: 4 },
    { i: "6", x: 0, y: 20, w: 6, h: 4 },
    { i: "7", x: 0, y: 24, w: 6, h: 4 }
  ],
  xs: [
    { i: "1", x: 0, y: 0, w: 4, h: 4 },
    { i: "2", x: 0, y: 4, w: 4, h: 4 },
    { i: "3", x: 0, y: 8, w: 4, h: 4 },
    { i: "4", x: 0, y: 12, w: 4, h: 4 },
    { i: "5", x: 0, y: 16, w: 4, h: 4 },
    { i: "6", x: 0, y: 20, w: 4, h: 4 },
    { i: "7", x: 0, y: 24, w: 4, h: 4 }
  ]
};

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const widgets = useSelector((state: RootState) => state.dashboard.widgets);
  const layouts = useSelector((state: RootState) => state.dashboard.layouts);

  const handleLayoutChange = (_currentLayout: any, allLayouts: any) => {
    dispatch(saveLayouts(allLayouts));
  };

  return (
    <div className="dashboard-container" style={{ padding: '20px' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1>Dynamic Dashboard</h1>
        <p>Drag widgets by their headers and resize them using the bottom-right corner handle.</p>
      </header>

      <ResponsiveGridLayout
        className="layout"
        layouts={Object.keys(layouts).length > 0 ? layouts : defaultLayouts}
        onLayoutChange={(layout, layouts) => handleLayoutChange(layout, layouts)}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={70}
        isDraggable={true}
        isResizable={true}
        draggableHandle=".grid-item__title"
      >
        {widgets.map((widget) => (
          <div key={widget.id} className="dashboard-item" style={{ touchAction: "none" }}>
            <Widget id={widget.id} name={widget.name} />
          </div>
        ))}
      </ResponsiveGridLayout>
      
      <WidgetEditor />
      <ReduxDebug />
    </div>
  );
};

export default Dashboard;
