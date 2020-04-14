const postFavoritesReducer = (state={
    9:true,
    7:true,
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