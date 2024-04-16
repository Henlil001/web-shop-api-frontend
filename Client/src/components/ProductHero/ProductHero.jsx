import "./ProductHero.css"

const ProductHero =()=>{

    return(<>
        <div className ="container text-center">
            <div className ="row row-cols-2">
                <div className="col">
                    <h3>{/*Title*/}</h3><br/>
                    <p>{/*Beskrivning*/}</p>
                </div>
                <div className="col">
                    <img src={"https://sthenlil001webshop.blob.core.windows.net/images/" + ProductInfo.imgurl} alt="" />
                </div>
            </div>
        </div>
    </>)
};

export default ProductHero;