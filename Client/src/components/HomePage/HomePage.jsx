import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProductCardList from "../ProductCardList/ProductCardList";
import ProductSpots from "../ProductSpots/ProductSpots";
import ProductHero from "../ProductHero/ProductHero";


const HomePage =()=>{

    return(<>
            <Header/>
            <main>
                <div className="container">
                    <div className="row row-cols-1">
                        <div className="col"><ProductHero/></div>
                        <div className="col"><ProductSpots/></div>
                        <div className="col"><ProductCardList/></div>
                    </div>
                </div>
            </main>
            <Footer/>
    
    </>)
}

export default HomePage;