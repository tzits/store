import './checkout-page.styles.scss'
import CheckoutItem from '../checkout-item/checkout-item.component'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'


const CheckoutPage = () => {
    const { cartItems, addItemToCart, lowerAmount, removeCartItem } = useContext(CartContext)
    return(
        <div>
            <div>
                <span>Product</span>
                <span>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </div>
            {cartItems.map(cartItem => (
                <CheckoutItem 
                    key={cartItem.id} 
                    cartItem={cartItem} 
                    addItem={addItemToCart}
                    lowerItem={lowerAmount}
                    remove={removeCartItem}
                />
            ))}
        </div>
    )
}

export default CheckoutPage