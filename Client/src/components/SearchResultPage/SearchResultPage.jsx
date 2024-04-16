import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProductCard from "../ProductCard/ProductCard";
import {WebShopContext} from '../../context/WebShopProvider'
import { useContext,} from "react";

const searchResultPage =()=>{

    const {searchresult} = useContext(WebShopContext);
    const result = searchresult && searchresult.products ? (
        searchresult.products.map(data => (
            <ProductCard key={data.id} ProductInfo={data} />
        ))
    ) : (
        <div>No search results</div>
    );

    console.log(searchresult);
    return(<>
    <Header/>
        <main>
            <p>Antal sökträffar {searchresult.numbersOfProducts}</p>
            {result}
        </main>
    <Footer/>
    </>)
}

export default searchResultPage;