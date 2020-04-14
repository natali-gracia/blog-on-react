const postFavoritesReducer = (state={
}, action) => {
    switch(action.type) {
        case 'FAVORITES':
            return {
                ...state,
                [action.id]:true,
            }
        case 'NOFAVORITES':
            return {
                ...state,
                [action.id]:false,
            }
        default:
            return state
        }
    }

export default postFavoritesReducer