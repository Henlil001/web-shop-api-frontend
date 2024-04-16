import { NavLink, useNavigate,useParams } from "react-router-dom";
import {WebShopContext} from '../../context/WebShopProvider'
import { useContext, useRef } from "react";
import './Header.css'



const Header =()=>{

    const {handelSearchedclick, } = useContext(WebShopContext);
    const searchVal = useRef(null);
    const navigate = useNavigate();

    
    const handelChange = async()=>{
        
       await handelSearchedclick(searchVal.current.value);
    }
    

    return (<>

            <nav className="navbar bg-body-secondary">
            <div className="container-fluid">
                <ul>
            <li><NavLink to="/">Hem</NavLink></li>
            <li><a href="">Erbjudande</a></li>
            <li><a href="">Kampanjer</a></li>
            </ul>
            <h2>Freaky Fashion</h2>
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Sök" aria-label="Search" ref={searchVal} onChange={handelChange}/>
                <button className="btn btn-outline-primary custom-btn" type="submit"  onClick={()=>navigate("/search")}>Sök</button>
                </form>
            </div>
            </nav>

    </>)
}

export default Header