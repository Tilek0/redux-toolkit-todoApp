import { configureStore} from '@reduxjs/toolkit';
import todoSlice from './todoSlice'
import visibilitySlice from "./visilitySlice";

const store = configureStore({
  reducer: {
    todoSlice,
    visibilitySlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
