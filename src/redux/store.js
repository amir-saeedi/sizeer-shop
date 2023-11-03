'use client';

import { createStore } from "redux";
import { combineReducers } from 'redux';
import birds from './Features/counter/counterSlice';
import carts from './cart/carts';
import like from './like/like';

const states = {
    birds,
    carts,
    like
}
const App = combineReducers(states);
export const store = createStore(App)
