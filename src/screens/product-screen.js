import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductScreen() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the product details!", error);
            });
    }, [productId]);

    if (!product) {
        return <p>Loading product details...</p>;
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} width="300" />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
}

export default ProductScreen;
