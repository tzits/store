import './checkout-item.styles.scss'

const CheckoutItem = (props) => {
    console.log(props)
    const { name, quantity, imageUrl, price } = props.cartItem
    return (
        <div className='checkout-item-container'>
            <div><img src={imageUrl} alt={name} /></div>
            <div>{name}</div>
            <div><span onClick={() => props.lowerItem(props.cartItem)}>lower</span><span>{quantity}</span><span onClick={() => props.addItem(props.cartItem)}>raise</span></div>
            <div>{price}</div>
            {/* <div onClick={() => props.removeCartItem(props.cartItem)}>X</div> */}
        </div>
    )
}

export default CheckoutItem