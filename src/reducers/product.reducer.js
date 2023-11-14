

export function productReducer(state = {
    data: [
        {
            id: Date.now() * Math.random(),
            name: "SP 1",
            price: 10000,
        },
        {
            id: Date.now() * Math.random(),
            name: "SP 2",
            price: 20000,
        },
        {
            id: Date.now() * Math.random(),
            name: "SP 3",
            price: 15000,
        },
        {
            id: Date.now() * Math.random(),
            name: "SP 4",
            price: 5000,
        },

    ]
}, action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case 'REMOVE_PRODUCT':
            return {
                ...state,
                data: state.data.filter(item => item.id !== action.payload.id)
            }
        default:
            return {...state};
    }}