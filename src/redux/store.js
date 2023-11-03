'use client';

import { createStore } from "redux";
import { combineReducers } from 'redux';
import birds from './Features/counter/counterSlice';
import carts from './cart/carts';

const states ={
    birds,
    carts
}
const App = combineReducers(states);
export const store = createStore(App)
