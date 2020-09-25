const initialState = {
    items: [],
    response: ''
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                items: action.payload
            }
        case 'ADD_NEW_USER':
            return {
                response: action.payload
            }
        default: 
            return state;
    }
}

export default users;