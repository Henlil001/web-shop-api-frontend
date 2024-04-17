import { Link } from "react-router-dom";
import './ProductSpots.css'
import {WebShopContext} from '../../context/WebShopProvider'
import { useContext,} from "react";

const ProductSpots =()=>{

    const {allProducts} = useContext(WebShopContext);

    if (!allProducts || allProducts.length === 0) {
        // Om allProducts inte finns eller är tom, returnera ett laddningsmeddelande eller hantera det på lämpligt sätt
        return <div>Laddar...</div>;
    }

    return(<>
        <div className ="container text-center marginBU">
            <div className ="row row-cols-3">
                <div className="col">
                <Link to={`/product/${allProducts[1].slug}`}>
                        <div className="containerse">
                            <img src={"https://sthenlil001webshop.blob.core.windows.net/images/" + allProducts[1].imageUrl} alt={allProducts[1].imageUrl} />
                            <div className="centered"><h5>{allProducts[1].title}</h5></div>
                        </div>
                    </Link>
                </div>
                <div className="col">
                <Link to={`/product/${allProducts[2].slug}`}>
                        <div className="containerse">
                            <img src={"https://sthenlil001webshop.blob.core.windows.net/images/" + allProducts[2].imageUrl} alt={allProducts[2].imageUrl} />
                            <div className="centered"><h5>{allProducts[2].title}</h5></div>
                        </div>
                    </Link>
                </div>
                <div className="col">
                <Link to={`/product/${allProducts[2].slug}`}>
                        <div className="containerse">
                            <img src={"https://sthenlil001webshop.blob.core.windows.net/images/" + allProducts[3].imageUrl} alt={allProducts[3].imageUrl} />
                            <div className="centered"><h5>{allProducts[3].title}</h5></div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    </>)
};

export default ProductSpots;