import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducers/wishlistReducer";

const WishListContext = createContext();

const WishListProvider = ({children}) => {

    const initialState = {
        wishlist: []
    }

    const [wishlist, wishDispatch] = useReducer(wishlistReducer, initialState);

    return (
        <WishListContext.Provider value={{wishlist, wishDispatch}}>
            {children}
        </WishListContext.Provider>
    )
        

}

const useWishList = () => useContext(WishListContext); //takes the value-->cart , cartDispatch

export { WishListProvider, useWishList }
