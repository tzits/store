import './cart-item.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'


const CartItem = ({ cartItem }) => {
    const { clearItemFromCart } = useContext(CartContext)

    const clearItemHandler = () => clearItemFromCart(cartItem)

    const { name, quantity, imageUrl, price } = cartItem
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={name} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>
            <span className='remove-button' onClick={clearItemHandler}>&#10005;</span>
        </div>
    )
}

export default CartItem