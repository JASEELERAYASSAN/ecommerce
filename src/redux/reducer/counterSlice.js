import { createSlice } from "@reduxjs/toolkit";

initialState = {
    value: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: [],
    reducers: {
        updateAddToCart: (state, action) => {
            const { prodId } = action.payload;
            if (state[prodId]) {
                state[prodId]++;                //product quantity increase by checking product id 
            } else {
                state[prodId] = 1;
            }
        },
        updateRemoveFromCart: (state, action) => {
            const { prodId } = action.payload;
            if (state[prodId] && state[prodId] > 0) {
                state[prodId]--;                         //product quantity decrease by checking product id
            }
        },
    }
})

export const {
    updateAddToCart,
    updateRemoveFromCart,
} = counterSlice.actions

export default counterSlice.reducer