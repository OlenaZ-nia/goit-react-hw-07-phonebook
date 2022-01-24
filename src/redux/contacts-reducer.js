import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const items = createReducer([], {
  'contacts/add': (state, {payload}) => [...state, payload],
  'contacts/delete': (state, { payload }) => state.filter(({ id }) => id !== payload),
})

const filter = createReducer('', {
  [actions.updateFilter]: ( _, {payload})=>payload,
})

export default combineReducers({
  items,
  filter,
});