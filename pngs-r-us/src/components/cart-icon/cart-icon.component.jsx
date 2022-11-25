import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import { CartIconDiv, ItemCount, ShoppingIconComponent} from './cart-icon.styles.jsx'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)
    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen)
    }
    return (
        <CartIconDiv onClick={toggleIsCartOpen}>
            <ShoppingIconComponent />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconDiv>
    )

}

export default CartIcon