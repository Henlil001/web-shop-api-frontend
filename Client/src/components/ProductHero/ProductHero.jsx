import "./ProductHero.css"
import {WebShopContext} from '../../context/WebShopProvider'
import { useContext,} from "react";

const ProductHero =()=>{

    const {allProducts} = useContext(WebShopContext);

    if (!allProducts || allProducts.length === 0) {
        // Om allProducts inte finns eller är tom, returnera ett laddningsmeddelande eller hantera det på lämpligt sätt
        return <div>Laddar...</div>;
    }

    return(<>
    
    
        <div className ="container text-center borderC">
            <div className ="row row-cols-2 h3Cen">
                <div className="col">
                    <h3>{allProducts[0].title}</h3><br/>
                    <p>{allProducts[0].description}</p>
                </div>
                <div className="col">
                    <img className="fitcont" src={"https://sthenlil001webshop.blob.core.windows.net/images/" + allProducts[0].imageUrl} alt={allProducts[0].imageUrl} />
                </div>
            </div>
        </div>
     
   
    </>)
};

export default ProductHero;