import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

// A simple component to debug Redux state
const ReduxDebug: React.FC = () => {
  const editingWidget = useSelector((state: RootState) => state.dashboard.editingWidget);
  
  return (
    <div style={{
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      backgroundColor: '#f5f5f5',
      padding: '10px',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      zIndex: 1000,
      fontSize: '12px',
      maxWidth: '300px',
      maxHeight: '200px',
      overflow: 'auto'
    }}>
      <p><strong>Editing Widget ID:</strong> {editingWidget || 'None'}</p>
    </div>
  );
};

export default ReduxDebug;
