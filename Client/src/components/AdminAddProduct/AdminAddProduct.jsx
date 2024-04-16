import './AdminAddProduct.css'
import {WebShopContext} from '../../context/WebShopProvider'
import { useContext, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminAddProduct =()=>{

    const {handelAddNewProductClick} = useContext(WebShopContext);
    const navigate = useNavigate();
    const [isFormValid, setIsFormValid] = useState(false);
    
    const title2 = useRef();
    const description2 = useRef();
    const imagefile2 = useRef();
    const sku2 = useRef();
    const price2 = useRef();

    const [title1, setTitle1] = useState('');
    const [description1, setDescription1] = useState('');
    const [imagefile1, setImagefile1] = useState(null);
    const [sku1, setSku1] = useState('');
    const [price1, setPrice1] = useState(0);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        imagefile: null,
        sku: '',
        price: 0
    });

    const validateForm = () => {
        
        
        // Check if all fields are filled in
        const isFilled =
        title2.current.value &&
        description2.current.value &&
        imagefile2.current.files.length > 0 && // Kolla om en fil är vald
        sku2.current.value &&
        price2.current.value;
        setIsFormValid(isFilled);
        
        
    };

    useEffect(() => {
        setFormData({
            title: title1,
            description: description1,
            imagefile: imagefile1,
            sku: sku1,
            price: price1
        });
    }, [title1, description1, imagefile1, sku1, price1]);


    const handelClick = async ()=>{

        validateForm();

        if(!isFormValid){
            console.log('Formuläret är ogiltigt');
            return(<div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <button type="button" class="btn-close" disabled aria-label="Close"></button>
                            <h5 class="card-title">Fyll i alla fällt</h5>  
                        </div>
                    </div>
                    )         
        };
        
        try {
            // Anropa handelAddNewProductClick och vänta på resultatet
            console.log(formData)
            await handelAddNewProductClick({ formData });
            console.log('Produkt tillagd');
            return(<div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">Produkt sparad</h5>  
                            <button onClick={() => navigate('/admin/products')}></button>
                        </div>
                    </div>)
        } catch (error) {
            // Hantera fel om handelAddNewProductClick misslyckades
            console.error('Failed to add product:', error);
            // Visa ett felmeddelande för användaren
            return(<div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <button type="button" class="btn-close" disabled aria-label="Close"></button>
                            <h5 class="card-title">Något gick fel</h5>  
                        </div>
                    </div>
                    )
        }
    };
        
        
        
    

    return(<> 
    <ul>
        <li>
            <h3>Ny Produkt</h3>
        </li>
        <li>
            <label>Namn</label><br />
            <input className='name' type="text" ref={title2} onChange={()=>setTitle1(title2.current.value)}/>
        </li>
        <li>
            <label>Beskrivning</label><br />
            <textarea name="description" type="text" ref={description2} onChange={()=>setDescription1(description2.current.value)}></textarea>
        </li>
        <li>
            <label>Bild</label><br />
            <input type="file" ref={imagefile2} onChange={()=>setImagefile1(imagefile2.current.files[0])}/>
        </li>
        <li>
             <label>SKU</label><br />
            <input type="text" ref={sku2} onChange={()=>setSku1(sku2.current.value)}/>
        </li>
        <li>
            <label>Pris</label><br />
            <input type="number" step=".01" ref={price2} onChange={()=>setPrice1(price2.current.value)}/>
        </li>
        <button onClick={()=>handelClick()} >Lägg till</button>
       
    </ul> 
    </>)
};

export default AdminAddProduct;