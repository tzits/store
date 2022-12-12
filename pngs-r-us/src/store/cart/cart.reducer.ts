import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { AnyAction } from "redux";
import { SetCartItems, setIsCartOpen, SetIsCartOpen } from "./cart.action";

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

};