import { CartItemDiv, Img, ItemDetails, Name, Price, RemoveButton} from './cart-item.styles.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { clearItemFromCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'


const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem

    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem))


    return (
        <CartItemDiv>
            <Img src={imageUrl} alt={name} />
            <ItemDetails>
                <Name>{name}</Name>
                <Price >{quantity} x ${price}</Price>
            </ItemDetails>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CartItemDiv>
    )
}

export default CartItem