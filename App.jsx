import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { itemsVerano, itemsInvierno, itemsMediaEstacion } from './src/products/products'
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
          <Route path='verano' element={<Items items={itemsVerano} />} />
          <Route path='invierno' element={<Items items={itemsInvierno} />} />
          <Route path='media-estacion' element={<Items items={itemsMediaEstacion} />} />
        </Route>
        <Route path='/sizes' element={<Sizes />} />
        <Route path='/asks' element={<Asks />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
