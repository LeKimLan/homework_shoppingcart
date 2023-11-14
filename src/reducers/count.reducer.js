

export const countReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return state +1;
        case 'REMOVE_PRODUCT':
            return state - 1;
        default:
            return state;
    }
}