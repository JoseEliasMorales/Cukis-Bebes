import products from '../products/products.json'
import '../styles/items.css'
import { formatearPeso } from '../config/config'
const Items = ({ limit }) => {
  return (
    <div className='cardsCatalog'>
      {limit
        ? products.slice(0, limit).map((product, index) => (
          <div key={product.price} className='cardCatalog'>
            <img className='imgCardCatalog' src={product.img} alt='' />
            <div className={`priceSize priceSize-${index % 3}`}>
              <p className='price'>ARS {formatearPeso.format(product.price)} </p>
              <p className='size'>Talla {product.size}</p>
            </div>
          </div>
        ))
        : products.map((product, index) => (
          <div key={product.price} className='cardCatalog'>
            <img className='imgCardCatalog' src={product.img} alt='' />
            <div className={`priceSize priceSize-${index % 3}`}>
              <p className='price'>ARS {formatearPeso.format(product.price)} </p>
              <p className='size'>Talla {product.size}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Items
