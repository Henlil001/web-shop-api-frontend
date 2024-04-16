import './ProductCard.css'
import { Link, useParams } from 'react-router-dom';



const ProductCard =({ProductInfo})=>{

    const{id} = useParams();

    return(<>
        <div className='container'><Link to="" key={ProductInfo.id} href={`product/${ProductInfo.slug}`}>
            <div>
                <img src={ProductInfo.imgurl} alt={ProductInfo.title} />
            </div>
            <div><p>{ProductInfo.title}</p><p className='floatR'>{ProductInfo.price}</p></div>
            </Link>
        </div>
    </>)
}

export default ProductCard;