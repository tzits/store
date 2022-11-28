import { Fragment, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../store/user/user.selector'
import { useSelector } from 'react-redux'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { CartContext, CartProvider } from '../../contexts/cart.context'
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './nav.styles'
import { signOutUser } from '../../utils/firebase/firebase.utils'


const Nav = () => {
    const currentUser = useSelector(selectCurrentUser)
    // const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)


    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                    currentUser ?
                        (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>) 
                            :
                        (<NavLink to='/auth'>
                            SIGN IN
                        </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
  }

  export default Nav