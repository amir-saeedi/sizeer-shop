'use client';

import { createStore } from "redux";
import { combineReducers } from 'redux';
import carts from './cart/carts';
import like from './like/like';

const states = {
    carts,
    like
}
const App = combineReducers(states);
export const store = createStore(App)
