import React from 'react'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import Mainpage from './pages/Mainpage'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Mainpage/>} />
      <Route path='/Header' element = {<Header/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App