'use client'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        { id: 1, name: "Shoes", priority: "Medium", price: 15000, quantity: 1 },
        { id: 2, name: "Table", priority: "Low", price: 200000, quantity: 5 },
        { id: 3, name: "Cake flour", priority: "High", price: 230, quantity: "1Kg" },
    ],
};

const itemSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = {
                id: state.items.length + 1,
                name: action.payload.name,
                priority: action.payload.priority,
                price: action.payload.price,
                quantity: action.payload.quantity,
            }
            state.items.push(newItem);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        updateItem: (state, action) => {
            const { id, name, priority, price, quantity } = action.payload;
            const existingItem = state.items.find(item => item.id === Number(id));

            if (existingItem) {
                existingItem.name = name;
                existingItem.priority = priority;
                existingItem.price = price;
                existingItem.quantity = quantity;
            }
        },
    }
});

export const { addItem, removeItem, updateItem } = itemSlice.actions;
export default itemSlice.reducer;