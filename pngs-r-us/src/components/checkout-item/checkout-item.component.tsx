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

import { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action'
import { CartItem } from '../../store/cart/cart.types'

type CartItemProps = {
    cartItem: CartItem
}

const CheckoutItem: FC<CartItemProps> = ( {cartItem} ) => {
    const { name, imageUrl, price, quantity } = cartItem

    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem))
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem))
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))


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