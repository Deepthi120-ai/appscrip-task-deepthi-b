export const wishlistReducer = (state, { type, payload }) => { //returns state, action-->action is type and payload
    switch(type){
        case "ADD_TO_WISHLIST":
            return { ////setting the state of the cart
                ...state,
                wishlist: [...state.wishlist, payload.product]
            }
        case "REMOVE_FROM_WISHLIST":
            return {
                ...state,
                wishlist: state.wishlist.filter(product => product.id !== payload.id)
            }
        default:
            return state
    }
}