'use client'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        { id: 1, name: "Shoes", priority: "Medium", price: 15000, quantity: 1, isPurchased: false },
        { id: 2, name: "Table", priority: "Low", price: 200000, quantity: 5, isPurchased: true },
        { id: 3, name: "Cake flour", priority: "High", price: 230, quantity: "1Kg", isPurchased: false },
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
                isPurchased: false,
            };
            state.items.push(newItem);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        updateItem: (state, action) => {
            const { id, name, priority, price, quantity } = action.payload;
            const existingItem = state.items.find((item) => item.id === Number(id));

            if (existingItem) {
                existingItem.name = name;
                existingItem.priority = priority;
                existingItem.price = price;
                existingItem.quantity = quantity;
            }
        },
        togglePurchased: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                item.isPurchased = !item.isPurchased;
            }
        },
    },
});

export const { addItem, removeItem, updateItem, togglePurchased } = itemSlice.actions;
export default itemSlice.reducer;
