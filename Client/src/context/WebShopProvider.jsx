import {useState,createContext, useEffect} from 'react';
import { GetAllProducts,SearchProducts,DeleteProduct,AddProduct } from '../services/ProductService';

export const WebShopContext = createContext(); 

const WebShopProvider = (props) =>{

    const [allProducts, setAllProducts] = useState([]);
    const [searchresult, setSearchResult] = useState({})
    
    useEffect(() => {
        // Hämta data från API:et
        const GetDataAsync = async ()=>{
            const data = await GetAllProducts();
            setAllProducts(data);
        }
        GetDataAsync();
            
    }, []);

    const handelSearchedclick = async (searchVal)=>{
      const result = await SearchProducts(searchVal);
        setSearchResult(result);
    };
    const handelAddNewProductClick = async (newProduct)=>{
       await AddProduct(newProduct);
       console.log(newProduct);
    };
    const handelDeletClick = async(id)=>{
       await DeleteProduct(id);
    };
    

                                                     /*Här lägger jag ut allt som de andra komponenterna ska kunna komma åt*/
    return (<WebShopContext.Provider value={{allProducts,searchresult,handelSearchedclick,handelAddNewProductClick, handelDeletClick,setSearchResult}}>
        {props.children}
        </WebShopContext.Provider>)
}

export default WebShopProvider;