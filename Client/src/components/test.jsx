import React, { useState } from 'react';
import './AdminAddProduct.css';
import { WebShopContext } from '../../context/WebShopProvider';
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AdminAddProduct = () => {
    const { handelAddNewProductClick } = useContext(WebShopContext);
    const navigate = useNavigate();
    
    // Tillståndsvariabel för att hålla koll på om popupen ska visas eller inte
    const [isPopupOpen, setIsPopupOpen] = useState(false);

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

    const validateForm = () => {
        // Kolla om alla fält är ifyllda och filen är vald
        const isFilled =
            title2.current.value &&
            description2.current.value &&
            imagefile2.current.files.length > 0 &&
            sku2.current.value &&
            price2.current.value;
        return isFilled;
    };

    const handelClick = async () => {
        const isFormValid = validateForm();

        if (!isFormValid) {
            console.log('Formuläret är ogiltigt');
            // Visa popup-rutan när formuläret är ogiltigt
            setIsPopupOpen(true);
            return;
        };

        try {
            // Anropa handelAddNewProductClick och vänta på resultatet
            const formData = {
                title: title1,
                description: description1,
                imagefile: imagefile1,
                sku: sku1,
                price: price1
            };
            console.log(formData);
            await handelAddNewProductClick({ formData });
            console.log('Produkt tillagd');
            navigate('/admin/products');
        } catch (error) {
            // Hantera fel om handelAddNewProductClick misslyckades
            console.error('Failed to add product:', error);
        }
    };

    return (
        <>
            <ul>
                <li>
                    <h3>Ny Produkt</h3>
                </li>
                <li>
                    <label>Namn</label><br />
                    <input className='name' type="text" ref={title2} onChange={() => setTitle1(title2.current.value)} />
                </li>
                <li>
                    <label>Beskrivning</label><br />
                    <textarea name="description" type="text" ref={description2} onChange={() => setDescription1(description2.current.value)}></textarea>
                </li>
                <li>
                    <label>Bild</label><br />
                    <input type="file" ref={imagefile2} onChange={() => setImagefile1(imagefile2.current.files[0])} />
                </li>
                <li>
                    <label>SKU</label><br />
                    <input type="text" ref={sku2} onChange={() => setSku1(sku2.current.value)} />
                </li>
                <li>
                    <label>Pris</label><br />
                    <input type="number" step=".01" ref={price2} onChange={() => setPrice1(price2.current.value)} />
                </li>
                <p><label>Tryck 2 gånger för att lägga till</label></p>
                <button onClick={handelClick} >Lägg till</button>
            </ul>

            {/* Popup-ruta */}
            {isPopupOpen && (
                <div className="popup-container">
                    <div className="popup-content">
                        <span className="close-btn" onClick={() => setIsPopupOpen(false)}>×</span>
                        <h2>Fyll i alla fält</h2>
                    </div>
                </div>
            )}
        </>
    );
};

export default AdminAddProduct;
