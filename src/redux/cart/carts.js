"use client";

export const initialState = [
    {
        category: "men's clothing",
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        id: 1,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95,
        rating: { rate: 3.9, count: 120 },
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    },
];

const ADD_CARTS = "ADD_CARTS";

export function addCarts(cart) {
    return {
        type: ADD_CARTS,
        carts,
    };
}

function carts(state = initialState, action) {
    switch (action.type) {
        case ADD_CARTS:
            return [
                ...state,
                {
                    name: action.carts,
                    views: 1,
                },
            ];
        default:
            return state;
    }
}

export default carts;
