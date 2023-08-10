import { BrowserRouter, Route, Routes } from 'react-router-dom'
import itemsNino from './products/productsNino.json'
import itemsNina from './products/productsNina.json'
import Home from './src/pages/Home'
import './src/styles/app.css'
import Navbar from './src/containers/Navbar'
import Catalog from './src/pages/Catalog'
import Footer from './src/containers/Footer'
import Sizes from './src/pages/Sizes'
import Asks from './src/pages/Asks'
import Items from './src/components/Items'
export function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='catalog' element={<Catalog />}>
          <Route path='nino' element={<Items items={itemsNino} />} />
          <Route path='nina' element={<Items items={itemsNina} />} />
        </Route>
        <Route path='/sizes' element={<Sizes />} />
        <Route path='/asks' element={<Asks />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
