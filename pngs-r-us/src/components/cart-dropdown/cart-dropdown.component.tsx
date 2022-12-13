import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

import { selectCartItems } from '../../store/cart/cart.selector'


import { DropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate();

    const goToCheckoutHandler = useCallback(() => {
        navigate('/checkout')}, [])

    return(
        <DropdownContainer>
            <CartItems>
                {
                    cartItems.length ? cartItems.map(item => (
                    <CartItem key={item.id} cartItem={item} />
                )) : (
                    <EmptyMessage>Your Cart is Empty</EmptyMessage>
                )
                    
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>CheckOut</Button>

        </DropdownContainer>
    )
}

export default CartDropdown