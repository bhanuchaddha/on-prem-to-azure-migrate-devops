// src/components/ProductList.jsx
import React, { useEffect, useState, useCallback } from 'react';
import { List, Card, Row, Col } from 'antd';
import AddProductModal from '../components/AddProductModal'; // Import the separate modal component
import ApiService from '../api/ApiService';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const fetchProducts = useCallback(async () => {
    try {
      const data = await ApiService.getProducts();
      setProducts(data);
    } catch (error) {
      // Handle the error appropriately
      console.error('Failed to fetch products:', error);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      {/* Button moved to App component */}
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {products.map((product) => (
          <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6} key={product.id}>
            <Card
              hoverable
              style={{ width: '100%', marginBottom: '20px' }}
              cover={
                <img
                  alt={product.name}
                  src={product.imageUrl}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
              }
            >
              <Card.Meta title={product.name} description={product.description} />
              <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
                Price: ${product.price}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <AddProductModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        fetchProducts={fetchProducts}
      />
    </>
  );
};

export default ProductList;
