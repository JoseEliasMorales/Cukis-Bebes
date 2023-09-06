/* import products from '../products/products.json'
import trend from '../products/productsTrend.json'
 */import '../styles/items.css'
import BtnWhatsapp from './BtnWhatsapp'
const Items = ({ items }) => {
  return (
    <div className='cardsCatalog'>
      {items &&
      items.map((product, index) => (
        <div key={index} className='cardCatalog'>
          <img className='imgCardCatalog' src={product.img} alt='' />
          <div className={`priceSize priceSize-${index % 3}`}>
            <p className='size'>Talle {product.size}</p>
            <BtnWhatsapp />
          </div>

        </div>
      ))}
    </div>
  )
}

export default Items
