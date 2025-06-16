import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from '../reducers';

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer
  },
  devTools: true
});

// For debugging - expose store to window during development
// Make Redux store available for console debugging
(window as any).__REDUX_STORE__ = store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
