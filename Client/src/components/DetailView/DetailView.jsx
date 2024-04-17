import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useParams } from 'react-router-dom';
import {WebShopContext} from '../../context/WebShopProvider'
import { useContext,} from "react";
import './DetailView.css'


const DetailView =()=>{

    const {allProducts} = useContext(WebShopContext);
    const{slug} = useParams();

    const filteredProduct = allProducts.find(product => product.slug === slug);
    console.log(filteredProduct)
    if (!filteredProduct){
        return(<><h1>slug not found</h1></>)
    }

    return(<>
    <Header/>
    <main className="Mar">
    <div className ="container">
            <div className ="row row-cols-2">
                <div className="col text-center">
                    <img src={"https://sthenlil001webshop.blob.core.windows.net/images/" + filteredProduct.imageUrl} alt={filteredProduct.imageUrl} />
                </div>
                <div className="col">
                    <h3>{filteredProduct.title}</h3><br/>
                    <p>{filteredProduct.description}</p><br/>
                    <p>{filteredProduct.price+" "} SEK</p><br/>
                    <button className="btn btn-light btn-outline-dark shadow">Lägg i varukorg</button>
                </div>
            </div>
        </div>
    </main>
    <Footer/>
    </>)
}

export default DetailView;