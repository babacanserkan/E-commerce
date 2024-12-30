import { createSlice } from "@reduxjs/toolkit";

export const getStorage = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"));
    }
    return [];
};

const initialState = {
    basketProducts: getStorage(),
    drawer: false,
};

export const setStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket));
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.basketProducts?.find(
                (product) => product.id === action.payload.id
            );

            if (findProduct) {
                const extractedProducts = state.basketProducts.filter(
                    (product) => product.id != action.payload.id
                );
                findProduct.count += action.payload.count;
                state.basketProducts = [...extractedProducts, findProduct];
                setStorage(state.basketProducts);
            } else {
                state.basketProducts = [
                    ...state.basketProducts,
                    action.payload,
                ];
            }
            setStorage(state.basketProducts);
        },

        setDrawer: (state) => {
            state.drawer = !state.drawer;
        },
    },
});

export const { addToBasket, setDrawer } = basketSlice.actions;
export default basketSlice.reducer;
