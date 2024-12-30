import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    selectedProduct: {},
    loading: false,
};

const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
    const respone = await axios.get(`${BASE_URL}/products`);
    return respone.data;
});

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
    },
    extraReducers: (builder) => {
        //* PENDING
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true;
        });

        //* 200 OK
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            (state.loading = false), (state.products = action.payload);
        });
    },
});

export const { setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
