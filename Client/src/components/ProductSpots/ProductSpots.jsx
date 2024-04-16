import { NavLink } from "react-router-dom";
import './ProductSpots.css'

const ProductSpots =()=>{
    return(<>
        <div className ="container text-center">
            <div className ="row row-cols-3">
                <div className="col">
                    <NavLink to="/product/:slug">
                        <div className="container">
                            <img src={/*"https://sthenlil001webshop.blob.core.windows.net/images/"*/ + ProductInfo.imgurl} alt="" />
                            <div className="centered">{/*title*/}Title</div>
                        </div>
                    </NavLink>
                </div>
                <div className="col">
                    <NavLink to="/product/:slug">
                        <div className="container">
                            <img src={/*"https://sthenlil001webshop.blob.core.windows.net/images/"*/ + ProductInfo.imgurl} alt="" />
                            <div className="centered">{/*title*/}Title</div>
                        </div>
                    </NavLink>
                </div>
                <div className="col">
                    <NavLink to="/product/:slug">
                        <div className="container">
                            <img src={/*"https://sthenlil001webshop.blob.core.windows.net/images/"*/ + ProductInfo.imgurl} alt="" />
                            <div className="centered">{/*title*/}Title</div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>

    </>)
};

export default ProductSpots;