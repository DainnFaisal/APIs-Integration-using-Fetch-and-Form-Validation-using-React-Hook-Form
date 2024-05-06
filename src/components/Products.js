import React, { useState, useEffect } from 'react';
import '../stylesheets/products.css'
import { Link } from 'react-router-dom'
import FilterListIcon from '@mui/icons-material/FilterList';


function Products() {
    const [products, setProducts] = useState([]);
    const [filteredCategory, setFilteredCategory] = useState(null); // State to store the selected category

    // product deletion
    function handleDelete(slug) {
        fetch(`https://api.storerestapi.com/products/${slug}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete product');
            }
            console.log('Product deleted successfully');
            // Refreshing products after deletion
            fetchProducts();
        })
        .catch(error => {
            console.error('Error deleting product:', error);
        });
    }
    
    // Get request to read products
    const fetchProducts = () => {
        fetch('https://api.storerestapi.com/products')
            .then(response => response.json())
            .then(data => {
                if (data.status === 200) {
                    setProducts(data.data);
                } else {
                    console.error('Failed to fetch products:', data.message);
                }
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }

    // Fetch products on initial render
    useEffect(() => {
        fetchProducts();
    }, []);

    // Function to filter products based on category
    const filterProducts = (category) => {
        if (category === filteredCategory) {
            setFilteredCategory(null); // If already filtered, then removing filter
        } else {
            setFilteredCategory(category);
        }
    }

    // Filtering products based on selected category
    const filteredProducts = filteredCategory ? products.filter(product => product.category.name === filteredCategory) : products;

    return (
        <div>
            <br />
            <Link to="/CreateProduct"><button className='create-product'>Create New Product</button></Link>
            <br />
            <h1 className='products-list-heading'>Products List:</h1>
            <br />
            <div className='filter'>
                <h5 className='filters-heading'><FilterListIcon/> Filters:</h5>
                <li onClick={() => filterProducts("men's fashion")}>Men's Fashion</li>
                <li onClick={() => filterProducts("women's fashion")}>Women's Fashion</li>
                <li onClick={() => filterProducts("bags & shoes")}>Bags & Shoes</li>
                <li onClick={() => filterProducts("jewelry & watches")}>Jewelry & Watches</li>
                <li onClick={() => filterProducts("computers")}>Computers</li>
                <li onClick={() => filterProducts("phone & tablets")}>Phone & Tablets</li>
                <li onClick={() => filterProducts("home & furniture")}>Home & Furniture</li>
                <li onClick={() => filterProducts("tools & hardware")}>Tools & Hardware</li>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <table className='product-table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Created By</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Slug</th>
                        <th>Image</th>
                        <th>Action</th> 
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map(product => (
                        <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.category.name}</td>
                            <td>{product.description}</td>
                            <td>{product.createdBy.name}</td>
                            <td>{product.createdAt}</td>
                            <td>{product.updatedAt}</td>
                            <td>{product.slug}</td>
                            <td>
                                <img src={product.image} alt={product.title} style={{ maxWidth: '100px' }} />
                            </td>
                            <td>
                                <button className='Delete-btn' onClick={() => handleDelete(product.slug)}>Delete</button> 
                                <br/>
                                <Link to="/UpdateProduct"><button className='Update-btn'>Update</button></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Products;
