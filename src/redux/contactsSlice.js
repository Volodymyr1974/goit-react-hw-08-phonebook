import { createSlice } from '@reduxjs/toolkit';


export const contactsSlice = createSlice({
  name: 'filtercontacts',
  initialState: {
    filter: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = contactsSlice.actions;

// Селектори
export const getFilter = state => state.filtercontacts.filter;
