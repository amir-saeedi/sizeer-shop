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
            const checker = state.find(cart => cart.id === action.carts.id)
            if (!checker) {
                return [
                    ...state,
                    {
                        ...action.carts,
                    },
                ];
            }
        case INCREASE_CARTS:
            const InCart = state.find(cart => cart.id === action.carts.id);
            return [
                ...state.filter(cart => cart.id !== action.carts.id),
                {
                    ...InCart,
                    number: InCart.number + 1
                },
            ];
        case DECREASE_CARTS:
            const DeCart = state.find(cart => cart.id === action.carts.id);
            return [
                ...state.filter(cart => cart.id !== action.carts.id),
                {
                    ...DeCart,
                    number: DeCart.number > 1 ? DeCart.number - 1 : 1
                },
            ];
        case REMOVE_CARTS:
            return [
                ...state.filter(cart => cart.id !== action.carts.id)
            ];
        default:
            return state;
    }
}

export default carts;
