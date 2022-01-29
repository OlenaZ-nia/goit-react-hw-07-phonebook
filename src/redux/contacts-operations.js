import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as contactsAPI from '../services/api';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, {rejectWithValue}) => {
        try {
            const data = await contactsAPI.fetchContacts();
            return data;
        } catch (error) {
           return rejectWithValue(error) 
        }
    }
)

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({name, number}, {rejectWithValue}) => {
        
        try {
            const contact = {
                name,
                phone: number,
            };
            const data = await contactsAPI.fetchCreateContact(contact);
            return data;
        } catch (error) {
           return rejectWithValue(error)
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, { rejectWithValue }) => {
        try {
            const data = await contactsAPI.fetchDeleteContact(id);
            return data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        updateFilter:( _, {payload})=>payload,
    },
})

export const { updateFilter } = filterSlice.actions;
export default filterSlice.reducer;




