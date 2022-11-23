import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const phoneSlice = createSlice({
  name: 'phoneBook',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContactGandler(state, action) {
      console.log(state);
      console.log(action);

      state.contacts.push({
        user: action.payload,

        isComplet: false,
        id: uuidv4(),
      });
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
    filterText(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'phoneBook',
  storage,
  whitelist: ['contacts'],
};
export const phoneReducer = persistReducer(persistConfig, phoneSlice.reducer);

export const { addContactGandler, deleteContact, filterText } =
  phoneSlice.actions;
