import React, { useState } from 'react'
import '../stylesheets/CreateProduct.css'

function Createproduct() {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    async function CreateProductBtn() {

        let object = {
            title,
            price,
            description,
        };

        if (price < 0) {
            alert('Price cannot be negative.');
            return;
        }
        
        let result = await fetch('https://api.storerestapi.com/products', {
            method: 'POST',
            body: JSON.stringify(object),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        });
        let data = await result.json();
        localStorage.setItem("user-info", JSON.stringify(data))
        console.log("User data stored in localStorage:", data);
    }

    return (
        <>
            <div className='container'>

                <div className='create-product-form'>

                    <h3 className='create-product-heading'>Create Product Form:</h3>

                    <input type='text' placeholder='Title' className='input-fields' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <br />
                    <input type='number' placeholder='Price' className='input-fields' value={price} onChange={(e) => setPrice(e.target.value)} />
                    <br />
                    <input type='text' placeholder='Description' className='input-fields' value={description} onChange={(e) => setDescription(e.target.value)} />
                    <br />
                    <button className='create-product-btn' onClick={CreateProductBtn}>Create Product</button>
                </div>
            </div>
        </>
    )
}

export default Createproduct
