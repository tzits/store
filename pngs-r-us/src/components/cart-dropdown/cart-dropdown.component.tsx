import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useCallback, useMemo } from 'react'
import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { useDispatch } from 'react-redux'
import { setIsCartOpen } from '../../store/cart/cart.action'


import { selectCartItems } from '../../store/cart/cart.selector'


import { DropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = () => {
    const dispatch = useDispatch()
    const isCartOpen = useSelector(selectIsCartOpen)
    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate();

    const goToCheckoutHandler = useCallback(() => {
        dispatch(setIsCartOpen(!isCartOpen))
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