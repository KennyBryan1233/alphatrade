// features/balanceSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = 10000; // Set the initial balance to 10,000

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    updateBalance(state, action) {
      return state - action.payload; // Decrease balance by the amount spent
    },
  },
});

export const { updateBalance } = balanceSlice.actions;
export default balanceSlice.reducer;