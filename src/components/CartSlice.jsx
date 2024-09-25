import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",  // Remove the array brackets and provide an object
    initialState: {
        items: [],
        totalPrice:0,
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            state.totalPrice+=action.payload.price/100;
        },
        removeItem:(state,action)=>{
            state.items=state.items.filter((item)=> item.id !==action.payload.id);
            state.totalPrice-=action.payload.price/100;
            if(state.items.length===0){
                state.totalPrice=0;
            }
        }
    },
});

export const { addItem,removeItem } = CartSlice.actions;
export default CartSlice.reducer;
