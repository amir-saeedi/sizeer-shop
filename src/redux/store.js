'use client';

import { createStore } from "redux";
import { combineReducers } from 'redux';
import birds from './Features/counter/counterSlice';


const birdApp = combineReducers({
    birds
});

export const store = createStore(birdApp)
