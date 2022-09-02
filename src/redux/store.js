import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { contactsApi } from './contactsApi';
import { authSlice } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filtercontacts: contactsSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
