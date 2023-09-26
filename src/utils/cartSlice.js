import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState: {
        items : [],
    },
    reducers: {
        addItem : (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            // state.items.pop();
            state.items.forEach((item, index)=> {
                if(item?.card?.info?.id === action.payload){
                    state.items.splice(index, 1);
                }
            })
        },
        clearCart : (state) => {
            state.items = [];
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;