import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("products")) || [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    deleteProduct: (state, action) => {
      const id = action.payload;

      const productsDataJSON = localStorage.getItem("products");

      const productsData = JSON.parse(productsDataJSON);

      const deletedProductsData = productsData.filter(
        (product) => product.id != id
      );

      state.value = deletedProductsData;

      localStorage.setItem("products", JSON.stringify(deletedProductsData));
    },
    addProduct: (state, action) => {
      const product = action.payload;

      state.value = [...state.value, product];

      localStorage.setItem("products", JSON.stringify(state.value));
    },
    updateProduct: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("products", JSON.stringify(state.value));
    },
  },
});

export const { deleteProduct, addProduct, updateProduct } =
  productSlice.actions;
export default productSlice.reducer;
