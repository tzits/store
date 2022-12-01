import { useDispatch, useSelector } from 'react-redux'

import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector.js'
import { setIsCartOpen } from '../../store/cart/cart.action.js'

import { CartIconDiv, ItemCount, ShoppingIconComponent} from './cart-icon.styles.jsx'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const CartIcon = () => {
    const dispatch = useDispatch()
    const isCartOpen = useSelector(selectIsCartOpen)
    const cartCount = useSelector(selectCartCount)

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))
    
    return (
        <CartIconDiv onClick={toggleIsCartOpen}>
            <ShoppingIconComponent />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconDiv>
    )

}

export default CartIcon