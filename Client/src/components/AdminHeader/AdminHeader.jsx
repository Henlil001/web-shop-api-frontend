import './AdminHeader.css'
import { useNavigate } from 'react-router-dom';

const AdminHeader =()=>{

    const navigate = useNavigate();
    
    return(<>
        <nav className="navbar bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1 text-white"><h2>Aministratör</h2></span>
                <button onClick={()=>navigate("/")}>Logga ut</button>
            </div>
            
        </nav>
    </>)
}

export default AdminHeader;