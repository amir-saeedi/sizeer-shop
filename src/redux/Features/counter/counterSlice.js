'use client'

export const initialState = { value: 0 }

// export const counterSlice = ({
//     name: 'counter',
//     initialState,
//     reducers: {
//         increment: (state) => { state.value += 1 },
//         decrement: (state) => { state.value -= 1 },
//         incrementByAmount: (state, action) => {
//             state.value += action.payload
//         }
//     }
// })
const ADD_BIRD = 'ADD_BIRD';
const INCREMENT_BIRD = 'INCREMENT_BIRD';

const defaultBirds = [
    {
        name: 'robin',
        views: 1,
    }
];

export function addBird(bird) {
    return {
        type: ADD_BIRD,
        bird,
    }
}

export function incrementBird(bird) {
    return {
        type: INCREMENT_BIRD,
        bird
    }
}

function birds(state = defaultBirds, action) {
    switch (action.type) {
        case ADD_BIRD:
            return [
                ...state,
                {
                    name: action.bird,
                    views: 1
                }
            ];
        case INCREMENT_BIRD:
            const bird = state.find(b => action.bird === b.name);
            const birds = state.filter(b => action.bird !== b.name);
            return [
                ...birds,
                {
                    ...bird,
                    views: bird.views + 1
                }
            ];
        default:
            return state;
    }
}

export default birds;
