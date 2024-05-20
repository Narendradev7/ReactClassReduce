import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "../Components/Functionality/navBar/navBar";

function HomeScreen() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/")
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the products!", error);
            });
    }, []);

    return (
        <div>
            <NavBar />
            <h1>Welcome to HomeScreen</h1>
            <ul>
                {products.length > 0 ? (
                    products.map(product => (
                        <li key={product.id}>
                            <Link to={`/products/${product.id}`}>{product.title}</Link>
                        </li>
                    ))
                ) : (
                    <p>Loading products...</p>
                )}
            </ul>
        </div>
    );
}

export default HomeScreen;
