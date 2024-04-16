import AdminAside from "../AdminAside/AdminAside";
import AdminHeader from "../AdminHeader/AdminHeader";
import './AdminPage.css'

const AdminPage =(props)=>{

    return(<>
        <AdminHeader/>
        <div className="grid">
            <AdminAside/>
            <main>
             {props.children}
            </main>
            
        </div>
    </>)
}

export default AdminPage;