import { CartItemDiv, Img, ItemDetails, Name, Price, RemoveButton} from './cart-item.styles.jsx'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'


const CartItem = ({ cartItem }) => {
    const { clearItemFromCart } = useContext(CartContext)

    const clearItemHandler = () => clearItemFromCart(cartItem)

    const { name, quantity, imageUrl, price } = cartItem
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