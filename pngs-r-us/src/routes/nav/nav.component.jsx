import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.context'
import { CartContext, CartProvider } from '../../contexts/cart.context'
import './nav.styles.scss'
import { signOutUser } from '../../utils/firebase/firebase.utils'


const Nav = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)


    return (
        <Fragment>
            <div className='nav'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                    currentUser ?
                        (<span className='nav-link' onClick={signOutUser}>SIGN OUT</span>) 
                            :
                        (<Link className='nav-link' to='/auth'>
                            SIGN IN
                        </Link>
                        )
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
  }

  export default Nav