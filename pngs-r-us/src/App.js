import { Routes, Route } from 'react-router-dom'
import Nav from './routes/nav/nav.component'
import Home from './routes/home/home.component'


const Shop = () => {
  return(
    <h1>I am the Shop Page</h1>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path= '/' element={<Nav />}>
        <Route index element={<Home />} />
        <Route path= '/shop' element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default App;
