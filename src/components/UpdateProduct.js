import React, { useState } from 'react';
import '../stylesheets/UpdateProduct.css';

function UpdateProduct() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    async function UpdateProductBtn() {
        try {
            const object = {
                title,
                price,
                description
            };

            if (price < 0) {
                alert('Price cannot be negative.');
                return;
            }
    
            const result = await fetch('https://api.storerestapi.com/products/running-sneaker', {
                method: 'PUT',
                body: JSON.stringify(object),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            });

            if (!result.ok) {
                throw new Error('Failed to update product');
            }

            const data = await result.json();
            console.log('Product updated successfully:', data);

        } catch (error) {
            console.error('Error updating product:', error);
        }
    }

    return (
        <div>
            <div className='container'>
                <div className='update-product-form'>
                    <h3 className='create-product-heading'>Update Product:</h3>
                    <input type='text' placeholder='Title' className='input-fields' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <br />
                    <input type='number' placeholder='Price' className='input-fields' value={price} onChange={(e) => setPrice(e.target.value)} />
                    <br />
                    <input type='text' placeholder='Description' className='input-fields' value={description} onChange={(e) => setDescription(e.target.value)} />
                    <br />
                    <button className='create-product-btn' onClick={UpdateProductBtn}>Update</button>
                </div>
            </div>
        </div>
    );
}

export default UpdateProduct;
