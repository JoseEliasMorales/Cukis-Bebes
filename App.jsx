import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './src/pages/Home'
import './src/styles/app.css'
import Navbar from './src/containers/Navbar'
import Catalog from './src/pages/Catalog'
import Footer from './src/containers/Footer'
export function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
