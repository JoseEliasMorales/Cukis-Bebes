/* import products from '../products/products.json'
import trend from '../products/productsTrend.json'
 */import '../styles/items.css'
import { formatearPeso } from '../config/config'
const Items = ({ items }) => {
  return (
    <div className='cardsCatalog'>
      {items &&
      items.map((product, index) => (
        <div key={index} className='cardCatalog'>
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
