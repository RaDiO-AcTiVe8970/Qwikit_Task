/*import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    }
  }
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;*/

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      const indexToRemove = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (indexToRemove !== -1) {
        const removedProduct = state.products.splice(indexToRemove, 1)[0];
        state.quantity -= removedProduct.quantity;
        state.total -= removedProduct.price * removedProduct.quantity;
      }
    }
  }
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
