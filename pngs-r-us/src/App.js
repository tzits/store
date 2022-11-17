import { Routes, Route } from 'react-router-dom'
import Nav from './routes/nav/nav.component'
import Home from './routes/home/home.component'


const App = () => {
  return (
    <Routes>
      <Route path= '/' element={<Nav />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App;
