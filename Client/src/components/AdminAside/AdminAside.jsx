import { NavLink } from 'react-router-dom';
import './AdminAside.css'


const AdminAside =()=>{

    return(<>
        <aside className="bg-body-secondary">
            <ul>
                <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>
                <li><NavLink to="/admin/products">Produkter</NavLink></li>
            </ul>
        </aside>
    </>)
}

export default AdminAside;