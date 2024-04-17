import './ProductCard.css'
import { Link} from 'react-router-dom';



const ProductCard =({ProductInfo})=>{

   

    return(<>
        <Link to={`/product/${ProductInfo.slug}`} key={ProductInfo.id} href={`product/${ProductInfo.slug}`}>
            <div className='containers'>
                <div>
                    <img className='imgK' src={"https://sthenlil001webshop.blob.core.windows.net/images/" + ProductInfo.imageUrl} alt={ProductInfo.imageUrl} />
                </div>
                <div>
                    <p className='floatL'>{ProductInfo.title}</p>
                    <p className='floatR'>{ProductInfo.price}</p>
                </div>
            </div>
        </Link>
    </>)
}

export default ProductCard;