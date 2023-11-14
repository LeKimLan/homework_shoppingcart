

export const cartReducer = (state = {
    cart: []
}, action) => {
    switch (action.type) {
        case 'BUY_PRODUCT':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case 'BUY_EXIST_PRODUCT':
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        };
                    }
                    return item;
                })
            };
        case 'DROP_PRODUCT':
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        };
                    }
                    return item;
                })
            };
        case 'DELETE_PRODUCT':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        default:
            return state;
    }
}