
import ProductCard from "../ProductCard/ProductCard";
import {WebShopContext} from '../../context/WebShopProvider'
import { useContext } from "react";


const ProductCardList =()=>{

    const {allProducts} = useContext(WebShopContext);
    const colum = allProducts.map(product =>{
    return (<div key={product.id} className ="col" ><ProductCard key={product.id} ProductInfo ={product}/></div>);})

    if (!allProducts){
        return(<div className="container text-center"><h3>No products</h3></div>)
    }

   
    return(<>
        <div className ="container text-center">
            <div className ="row row-cols-4">
                {colum}
            </div>
        </div>
    </>)
};

export default ProductCardList;