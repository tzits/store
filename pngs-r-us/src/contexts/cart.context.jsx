import { createContext, useState, useEffect } from 'react'

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
        {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }

    return [...cartItems, { ...productToAdd, quantity: 1}]
}

const removeItem = (cartItems, cartItemToRemove) => {
    console.log(cartItems)
    console.log(cartItemToRemove)
    return cartItems
    // const newItems = cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    // console.log(newItems);
    // return newItems
}

const lowerCartItem = (cartItems, productToLower) => {
    const item = cartItems.find((cartItem) => cartItem.id === productToLower.id)

    if (item.quantity > 1) {
        return cartItems.map((cartItem) => cartItem.id === productToLower.id ? 
        {...cartItem, quantity: cartItem.quantity - 1} : cartItem)
    } else {
        removeItem(cartItems, productToLower)
    }
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    removeCartItem: () => {},
    lowerAmount: () => {}
})



export const CartProvider = ({ children }) => {
    const [ isCartOpen, setIsCartOpen ] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity,0)
        setCartCount(newCartCount)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const lowerAmount = (productToReduce) => {
        setCartItems(lowerCartItem(cartItems, productToReduce))
    }

    const removeCartItem = (cartItemToRemove) => {
        setCartItems(removeItem(cartItems, cartItemToRemove))
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, lowerAmount, removeCartItem};

    return (
        <CartContext.Provider value={value}> {children} </CartContext.Provider>
    )
}