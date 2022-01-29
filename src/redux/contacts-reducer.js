import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import { updateFilter } from './contacts-actions';
import filter from './contacts-operations';

import { fetchContacts } from './contacts-operations';
import { addContact } from './contacts-operations';
import { deleteContact } from './contacts-operations';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, {payload})=> state.filter(({id}) => id !== payload.id),

})

const loading = createReducer(false, {
  [fetchContacts.pending]: ()=> true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
})

// const filter = createReducer('', {
//   [updateFilter]: ( _, {payload})=>payload,
// })

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: ()=> null,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});





