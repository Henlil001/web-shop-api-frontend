import { NavLink } from 'react-router-dom';
import './AdminAside.css'


const AdminAside =()=>{

    return(<>
        <aside className="bg-body-secondary">
            <ul>
                <li><NavLink className='navlink' to="/admin/dashboard">Dashboard</NavLink></li>
                <li><NavLink className='navlink' to="/admin/products">Produkter</NavLink></li>
            </ul>
        </aside>
    </>)
}

export default AdminAside;