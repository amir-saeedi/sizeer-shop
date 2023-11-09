"use client";

import { toast } from "react-toastify";

export const initialState = [
    {
        category: "men's clothing",
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        id: 1,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95,
        rating: { rate: 3.9, count: 120 },
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        number: 2,
    },
];

const ADD_CARTS = "ADD_CARTS";
const INCREASE_CARTS = "INCREASE_CARTS";
const DECREASE_CARTS = "DECREASE_CARTS";
const REMOVE_CARTS = "REMOVE_CARTS";

export function addCarts(carts) {
    return {
        type: ADD_CARTS,
        carts,
    };
}
export function increaseCarts(carts) {
    return {
        type: INCREASE_CARTS,
        carts,
    };
}
export function decreaseCarts(carts) {
    return {
        type: DECREASE_CARTS,
        carts,
    };
}
export function removeCarts(carts) {
    return {
        type: REMOVE_CARTS,
        carts,
    };
}

function carts(state = initialState, action) {
    switch (action.type) {
        case ADD_CARTS:
            const checker = state.find(cart => cart.id === action.carts.id);
            if (!checker) {
                toast.success(
                    <>
                        <b>{action.carts.title}</b> added to cart
                    </>,
                    {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                return [
                    ...state,
                    {
                        ...action.carts,
                    },
                ];
            }
        case INCREASE_CARTS:
            const InCart = state.find(cart => cart.id === action.carts.id);
            const Inindex = state.indexOf(InCart);
            return [
                ...state.slice(0, Inindex),
                {
                    ...InCart,
                    number: InCart.number + 1
                },
                ...state.slice(Inindex + 1, state.length),
            ]
        case DECREASE_CARTS:
            const DeCart = state.find(cart => cart.id === action.carts.id);
            const Deindex = state.indexOf(DeCart);
            return [
                ...state.slice(0, Deindex),
                {
                    ...DeCart,
                    number: DeCart.number - 1
                },
                ...state.slice(Deindex + 1, state.length),
            ]
        case REMOVE_CARTS:
            toast.warn(
                <>
                    <b>{action.carts.title}</b> removed from cart
                </>,
                {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            return [
                ...state.filter(cart => cart.id !== action.carts.id)
            ];
        default:
            return state;
    }
}

export default carts;
