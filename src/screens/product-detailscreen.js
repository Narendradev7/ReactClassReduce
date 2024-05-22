import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeInfo } from '../navigation/navigation-stack';
import { Container, Row, Col, Button, Spinner, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function ProductDetail() {
  const { productID } = useParams();
  const [eachProduct, setEachProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(ThemeInfo);

  useEffect(() => {
    fetchEachProduct();
  }, [productID]);

  const fetchEachProduct = async () => {
    try {
      const result = await axios.get(`https://dummyjson.com/products/${productID}`);
      setEachProduct(result.data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    addToCart(eachProduct);
  };

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" />
      </Container>
    );
  }

  return (
    <Container className="product-details">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={eachProduct.thumbnail} alt={eachProduct.title} />
            <Card.Body>
              <Row>
                {eachProduct.images.map((img, index) => (
                  <Col xs={3} key={index}>
                    <img src={img} alt={eachProduct.title} className="img-fluid" />
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <div className="details">
            <h2>{eachProduct.title}</h2>
            <p>{eachProduct.description}</p>
            <div className="price">
              <span>${eachProduct.price.toFixed(2)}</span>
              <span className="discount">({eachProduct.discountPercentage}% off)</span>
            </div>
            <div className="rating">
              <span>Rating: {eachProduct.rating}</span>
            </div>
            <div className="stock">
              {eachProduct.stock > 0 ? `In Stock (${eachProduct.stock})` : 'Out of Stock'}
            </div>
            <div className="brand-category">
              <span>Brand: {eachProduct.brand}</span>
              <br />
              <span>Category: {eachProduct.category}</span>
            </div>
            <div className="actions">
              <Button variant="primary" className="mr-2" onClick={handleAddToCart}>Add to Cart</Button>
              <Button variant="success">Buy Now</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
