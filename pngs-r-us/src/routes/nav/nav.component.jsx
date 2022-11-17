import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'

const Nav = () => {
    return (
        <Fragment>
            <div className='nav'>
                <Link className='logo-container' to='/'>
                    <div>LOGO</div>
                </Link>
                <div className='nav-links-container'>
                    <Link classsName='nav-link' to='/shop'>
                        SHOP
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
  }

  export default Nav