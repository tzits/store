import { useContext  } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../contexts/cart.context'

import { DropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles.jsx'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }
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