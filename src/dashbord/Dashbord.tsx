import React from 'react';
import { SelectChart } from '../SelectChart/SelectChart';
import { Responsive, WidthProvider } from "react-grid-layout";
import { layout } from '../../src/layoutConfig';

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard: React.FC = () => {


    return (
        <ResponsiveGridLayout
        className="layout"
        layouts={layout}
        // onBreakpointChange={this.handleBreakPointChange}
        // onLayoutChange={this.handleLayoutChange}
        isDraggable
        // isRearrangeable
        isResizable
        draggableHandle=".grid-item__title"
        breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        <div key="a">a</div>
        <div key="b">b</div>
        <div key="с">
            <h1>Dashboard</h1>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                <div style={{ flex: 1, background: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
                    <h2>Statistics</h2>
                    <ul>
                        <li>Users: 120</li>
                        <li>Sales: $2,400</li>
                        <li>Active Sessions: 15</li>
                    </ul>
                </div>
                <div style={{ flex: 2, background: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
                    <h2>Recent Activity</h2>
                    <ul>
                        <li>User JohnDoe signed up</li>
                        <li>Order #1234 completed</li>
                        <li>Server backup finished</li>
                    </ul>
                    <SelectChart />
                </div>
            </div>
        </div>
      </ResponsiveGridLayout>

        
    );
};

export default Dashboard;