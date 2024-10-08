import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addToCart : (state, action) => {
            const { productID, quantity, productName, userId, productPrice, productImage} = action.payload;
            const findProductsID = (state.items).findIndex(item => item.productID === productID);
            if (findProductsID >= 0) {
                // state.items[findProductsID].quantity += quantity;
            }
            else{
                state.items.push({productID, quantity, productName, productImage, productPrice, userId});
                localStorage.setItem('cart', JSON.stringify(state.items));
            }
        },
        changeQuantity: (state, action) => {
            const {productID, quantity} = action.payload;
            const findProductsID = (state.items).findIndex(item => item.productID === productID);
            if (quantity > 0) {
                state.items[findProductsID].quantity = quantity;
            }
            else{
                state.items = (state.items).filter(item => item.productID !== productID);
            }
            localStorage.setItem('cart', JSON.stringify(state.items));
        }
    }
})
export const { addToCart, changeQuantity} = cartSlice.actions;

export default cartSlice.reducer;