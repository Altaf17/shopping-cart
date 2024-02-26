import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./productsSlice/productsSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
