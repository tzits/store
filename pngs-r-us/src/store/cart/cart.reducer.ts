import { CartItem } from "./cart.types";
import { AnyAction } from "redux";
import { setCartItems, SetCartItems, setIsCartOpen, SetIsCartOpen } from "./cart.action";

export type CartState = {
    readonly isCartOpen: boolean;
    readonly cartItems: CartItem[]
}

const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
}

export const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction): CartState => {
    if (setIsCartOpen.match(action)) {
        return {
            ...state,
            isCartOpen: action.payload,
        }
    }
    if (setCartItems.match(action)) {
        return {
            ...state,
            cartItems: action.payload
        }
    }
    return state

};