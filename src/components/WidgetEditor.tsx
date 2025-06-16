import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetEditingWidget } from '../reducers';
import type { RootState } from '../store';

const WidgetEditor: React.FC = () => {
  const dispatch = useDispatch();
  const editingWidget = useSelector((state: RootState) => state.dashboard.editingWidget);
  const widgets = useSelector((state: RootState) => state.dashboard.widgets);
  
  // For debugging
  useEffect(() => {
    console.log('WidgetEditor - Current editing widget ID:', editingWidget);
  }, [editingWidget]);
  
  const currentWidget = widgets.find(widget => widget.id === editingWidget);
  
  const handleClose = () => {
    dispatch(resetEditingWidget());
  };

  if (!editingWidget) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        width: '400px',
        maxWidth: '90%',
        maxHeight: '90%',
        overflow: 'auto',
      }}>
        <h2>Edit Widget: {currentWidget?.name}</h2>
        
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="widget-title" style={{ display: 'block', marginBottom: '5px' }}>
            Title
          </label>
          <input
            id="widget-title"
            type="text"
            value={currentWidget?.name || ''}
            readOnly
            style={{ 
              width: '100%', 
              padding: '8px',
              borderRadius: '3px',
              border: '1px solid #ddd'
            }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="widget-type" style={{ display: 'block', marginBottom: '5px' }}>
            Widget Type
          </label>
          <select
            id="widget-type"
            style={{ 
              width: '100%', 
              padding: '8px',
              borderRadius: '3px',
              border: '1px solid #ddd'
            }}
          >
            <option value="area">Area Chart</option>
            <option value="bar">Bar Chart</option>
            <option value="line">Line Chart</option>
            <option value="pie">Pie Chart</option>
            <option value="scatter">Scatter Plot</option>
            <option value="radar">Radar Chart</option>
            <option value="table">Data Table</option>
          </select>
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="widget-data" style={{ display: 'block', marginBottom: '5px' }}>
            Data Source
          </label>
          <select
            id="widget-data"
            style={{ 
              width: '100%', 
              padding: '8px',
              borderRadius: '3px',
              border: '1px solid #ddd'
            }}
          >
            <option value="sample">Sample Data</option>
            <option value="api">API Data</option>
            <option value="custom">Custom Data</option>
          </select>
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="widget-refresh" style={{ display: 'block', marginBottom: '5px' }}>
            Auto Refresh (seconds)
          </label>
          <input
            id="widget-refresh"
            type="number"
            min="0"
            step="1"
            defaultValue={0}
            style={{ 
              width: '100%', 
              padding: '8px',
              borderRadius: '3px',
              border: '1px solid #ddd'
            }}
          />
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
          <button 
            onClick={handleClose}
            style={{ 
              padding: '8px 15px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
          <button 
            onClick={handleClose} // In a real app, this would save changes
            style={{ 
              padding: '8px 15px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer'
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default WidgetEditor;
