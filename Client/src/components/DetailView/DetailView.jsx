import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const DetailView =()=>{

    return(<>
    <Header/>
    <main>
    <div className ="container">
            <div className ="row row-cols-2">
                <div className="col">
                    <img src={"https://sthenlil001webshop.blob.core.windows.net/images/" + /*imgeUrl*/ProductInfo.imgurl} alt="" />
                </div>
                <div className="col">
                    {/*titel*/ }<br/>
                    {/*beskrivning*/}<br/>
                    {/*pris*/+" SEK"}<br/>
                    <button className="btn btn-light btn-outline-dark shadow">Lägg till</button>
                </div>
            </div>
        </div>
    </main>
    <Footer/>
    </>)
}

export default DetailView;