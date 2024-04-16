import {WebShopContext} from '../../context/WebShopProvider'
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const AdminProducts =()=>{

    const {handelDeletClick, allProducts } = useContext(WebShopContext);
    const navigate = useNavigate();

    

   const tablerows = allProducts.map(product => {return (<tr key={product.id}>
                                                <td scope="col">{product.title}</td>
                                                <td scope="col">{product.sku}</td>
                                                <td scope="col">{product.price}</td>
                                                <td scope="col"><button onClick={()=>handelDeletClick(product.id)}>Radera</button></td>
                                                </tr>)})
    return(<>
            <h3>Produkter</h3>
            <button type="button" className="btn btn-light" onClick={()=>navigate("/admin/add-product")}>Ny produkt</button>
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">Produkt</th>
                    <th scope="col">SKU</th>
                    <th scope="col">Pris</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {tablerows}
            </tbody>
            </table>
    </>)
}

export default AdminProducts;