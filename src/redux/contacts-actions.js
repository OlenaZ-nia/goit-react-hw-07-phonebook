import { createAction } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add', (name, number) => ({
    payload: {
        id: nanoid(),
        name,
        number,
    }
}));

export const deleteContact = createAction('contacts/delete');

export const updateFilter = createAction('contacts/updateFilter');

const actions = { addContact, deleteContact, updateFilter }
export default actions;