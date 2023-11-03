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
        liked: true,
    },
    {
        category: "men's clothing",
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        id: 4,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95, liked: true,
        rating: { rate: 3.9, count: 120 },
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        liked: true,
    },
    {
        category: "men's clothing",
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        id: 8,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95,
        rating: { rate: 3.9, count: 120 },
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        liked: true,
    },
];

const ADD_LIKE = "ADD_LIKE";
const REMOVE_LIKE = "REMOVE_LIKE";

export function addLikes(like) {
    return {
        type: ADD_LIKE,
        like,
    };
}
export function RemoveLikes(like) {
    return {
        type: REMOVE_LIKE,
        like,
    };
}

function likes(state = initialState, action) {
    switch (action.type) {
        case ADD_LIKE:
            return [
                ...state,
                {
                    ...action.like,
                    liked: true,
                },
            ];
        case REMOVE_LIKE:
            return [
                ...state.filter(value => value.id !== action.like.id)
            ]
        default:
            return state;
    }
}

export default likes;
