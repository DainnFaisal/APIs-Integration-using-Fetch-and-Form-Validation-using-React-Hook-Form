import React, { useState, useEffect } from 'react';

function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://api.storerestapi.com/categories')
            .then(response => response.json())
            .then(data => {
                console.log('API Response:', data);
                if (Array.isArray(data.data)) {
                    setCategories(data.data);
                } else {
                    console.error('Unexpected data format:', data);
                }
            })
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    return (
        
        <div>
            <h2>Categories</h2>
            <table className='product-table'> 
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <tr key={category._id}>
                            <td>{category._id}</td>
                            <td>{category.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Categories;
