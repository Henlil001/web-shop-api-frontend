
import './Footer.css'

const Footer =()=>{

    return(<>
    <footer className="bg-body-secondary">
            <div className="container">
                <div className="row">
                    <div className="col">
                    <ul>
                    <h6>Shopping</h6>
                        <li><a href="">Vinterjackor</a></li>
                        <li><a href="">PufferJackor</a></li>
                        <li><a href="">Kappa</a></li>
                        <li><a href="">Trenchcoats</a></li>
                    </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <h6>Mina Sidor</h6>
                            <li><a href="">Mina Ordrar</a></li>
                            <li><a href="">Mitt Konto</a></li>
                        </ul>
                    
                    </div>
                    <div className="col">
                        <ul>
                            <h6>Kundtjänst</h6>
                            <li><a href="">Returnpolicy</a></li>
                            <li><a href="">Integritetspolicy</a></li>
                            
                        </ul>
                    
                    </div>
                    <div className="col">
                    
                    </div>
                    <div className="col">
                    
                    </div>
                </div>
            </div>
            <p>&copy;Freaky Fashion</p>
    </footer>
    </>)
}

export default Footer;