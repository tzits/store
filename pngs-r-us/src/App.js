import { Routes, Route } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import Spinner from './components/spinner/spinner.component'
import { useDispatch } from 'react-redux'


import { checkUserSession } from './store/user/user.action'
import { GlobalStyle } from './global.styles'


const Nav = lazy(() => import('./routes/nav/nav.component'))
const  Authentication  = lazy(() => import('./routes/authentication/authentication.component'))
const Shop = lazy(() => import('./routes/shop/shop.component'))
const Checkout = lazy(() => import( './routes/checkout/checkout.component'))
const Home = lazy(() => import('./routes/home/home.component'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())  
  },[])

  return (
    <div>
    <GlobalStyle />
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path= '/' element={<Nav />}>
          <Route index element={<Home />} />
          <Route path= '/shop/*' element={<Shop />} />
          <Route path= '/auth' element={<Authentication />} />
          <Route path= '/checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
    </div>
  )
}

export default App;
