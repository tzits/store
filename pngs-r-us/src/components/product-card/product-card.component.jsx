import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import {ProductCardContainer, Img, Name, Price, Footer} from './product-card.styles.jsx'

const ProductCard = ( {product} ) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext)
    const addProductToCart = () => addItemToCart(product)

    return(    
        <ProductCardContainer>
            <Img src={imageUrl} alt={`${name}`}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button type={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to Cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard