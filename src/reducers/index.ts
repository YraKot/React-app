import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define the initial state
interface DashboardState {
  layouts: Record<string, any>;
  widgets: Array<{ id: string; name: string }>;
  editingWidget: string | null;
}

const initialState: DashboardState = {
  layouts: {},
  widgets: [
    { id: "1", name: "Area Chart" },
    { id: "2", name: "Bar Chart" },
    { id: "3", name: "Line Chart" },
    { id: "4", name: "Pie Chart" },
    { id: "5", name: "Scatter Plot" },
    { id: "6", name: "Radar Chart" },
    { id: "7", name: "Data Table" }
  ],
  editingWidget: null
};

// Create a slice for dashboard state
const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    // Save layout changes when user resizes or moves widgets
    saveLayouts: (state, action: PayloadAction<any>) => {
      state.layouts = action.payload;
    },
    
    // Set a widget as being edited
    setEditingWidget: (state, action: PayloadAction<string | null>) => {
      state.editingWidget = action.payload;
    },
    
    // Reset the editing widget
    resetEditingWidget: (state) => {
      state.editingWidget = null;
    }
  }
});

// Export actions
export const { saveLayouts, setEditingWidget, resetEditingWidget } = dashboardSlice.actions;

// Export the reducer
export default dashboardSlice.reducer;
