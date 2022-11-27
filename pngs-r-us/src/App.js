import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Nav from './routes/nav/nav.component'
import Home from './routes/home/home.component'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import Checkout from './routes/checkout/checkout.component'
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils'
import { setCurrentUser } from './store/user/user.action'


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
            createUserDocumentFromAuth(user)
        }
        dispatch(setCurrentUser(user));
    })

    return unsubscribe
  },[])

  return (
    <Routes>
      <Route path= '/' element={<Nav />}>
        <Route index element={<Home />} />
        <Route path= '/shop/*' element={<Shop />} />
        <Route path= '/auth' element={<Authentication />} />
        <Route path= '/checkout' element={<Checkout />} />

      </Route>
    </Routes>
  )
}

export default App;
