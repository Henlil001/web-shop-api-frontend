import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProductCard from "../ProductCard/ProductCard";
import {WebShopContext} from '../../context/WebShopProvider'
import { useContext,} from "react";

const searchResultPage =()=>{

    const {searchresult, searchInput} = useContext(WebShopContext);
    const result = searchresult && searchresult.products ? (
        searchresult.products.map(data => (
           <div className ="col" key={data.id}><ProductCard key={data.id} ProductInfo={data}/></div>
        ))
    ) : (
        <div>No search results</div>
    );

    console.log(searchresult);
    return(<>
    <Header/>
        <main>
            <h5>Sökord "{searchInput}" gav {searchresult.numbersOfProducts} resultat</h5><br />
        <div className ="container text-center">
            <div className ="row row-cols-4">
            {result}
            </div>
        </div>
           
            
        </main>
    <Footer/>
    </>)
}

export default searchResultPage;