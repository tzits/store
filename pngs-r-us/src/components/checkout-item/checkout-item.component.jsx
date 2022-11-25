import { 
    CheckoutItemContainer, 
    ImageContainer, 
    Img,
    Name,
    Price,
    Quantity,
    Value,
    Arrow,
    RemoveButton
} from './checkout-item.styles'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CheckoutItem = ( {cartItem} ) => {
    const { name, imageUrl, price, quantity } = cartItem

    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext)

    const clearItemHandler = () => clearItemFromCart(cartItem)
    const removeItemHandler = () => removeItemFromCart(cartItem)
    const addItemHandler = () => addItemToCart(cartItem)


    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <Name>{name}</Name>  
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem