
export const GetAllProducts = async ()=>{
    
    const response = await fetch('/api/Products');
    const data = await response.json();
    console.log(data);
    return data;
};

export const  SearchProducts = async (searchVal)=>{

   const result = await fetch(`/api/Products/search=${searchVal}`);
    const data = result.json();
    return data;
};


export const AddProduct = async (productObj) => {
    console.log('productObj:', productObj);
    

    // Kontrollera om nödvändiga egenskaper finns i productObj
    if (!productObj.formData.title || !productObj.formData.description || !productObj.formData.price || !productObj.formData.sku || !productObj.formData.imagefile) {
        throw new Error('Missing required properties in product object');
    }

    // Skapa ett objekt som representerar det du ska skicka till API:et
    // const dataToSend = {
    //     Title: productObj.formData.title,
    //     Description: productObj.formData.description,
    //     Price: productObj.formData.price,
    //     ImageUrl: productObj.formData.imagefile.name,
    //     ImageFile: productObj.formData.imagefile,
    //     SKU: productObj.sku
    //     // Eventuellt andra egenskaper som du behöver skicka med
    // };

    // console.log(dataToSend)

    // Gör ett HTTP POST-anrop till din API med fetch
    const formData = new FormData();
    formData.append('Title', productObj.formData.title);
    formData.append('Description', productObj.formData.description);
    formData.append('Price', productObj.formData.price);
    formData.append('ImageUrl', productObj.formData.imagefile.name);
    formData.append('ImageFile', productObj.formData.imagefile);
    formData.append('SKU', productObj.sku);
    
    await fetch('/api/Products/admin/add-product', {
        method: 'POST',
        body: formData
    });
    
};

export const DeleteProduct = async (id)=>{

   await fetch(`/api/Products/admin/delete-product${id}`, { method: 'DELETE' })
    
};


