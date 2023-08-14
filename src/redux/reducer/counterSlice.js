import { createSlice } from "@reduxjs/toolkit";

initialState = {
    cart:[],
    cartTotal:0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: [],
    reducers: {
        updateAddToCart: (state, action) => {
            const { prodId } = action.payload;
            if (state[prodId]) {
                state[prodId]++;
            } else {
                state[prodId] = 1;
            }
        },
        updateRemoveFromCart: (state, action) => {
            const { prodId } = action.payload;
            if (state[prodId] && state[prodId] > 0) {
                state[prodId]--;
            }
        },
        cartPriceAdd: (state, action) => {
            const { prodId } = action.payload;
            // Find the product by ID
            const product = state.cart.find(item => item.prodId === prodId);
            if (product) {
              product.quantity++;
              product.prdTotalPrice = product.quantity * parseFloat(product.price);
            }
            state.cartTotal = state.cart.reduce((total, item) => total + item.prdTotalPrice, 0);
          },

          cartPriceRemove: (state, action) => {
            const { prodId } = action.payload;
            // Find the product by ID
            const product = state.cart.find(item => item.prodId === prodId);
            if (product && product.quantity > 0) {
              product.quantity--;
              product.prdTotalPrice = product.quantity * parseFloat(product.price);
            }
            state.cartTotal = state.cart.reduce((total, item) => total + item.prdTotalPrice, 0);
          },
    }
})

export const {
    updateAddToCart,
    updateRemoveFromCart,
    cartPriceAdd,
    cartPriceRemove
} = counterSlice.actions

export default counterSlice.reducer