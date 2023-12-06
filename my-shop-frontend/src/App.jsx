import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import ProductList from './components/ProductList';
import AddProductModal from './components/AddProductModal'; // Make sure to import the AddProductModal component

const { Header, Content, Footer } = Layout;

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to refresh the product list
  const refreshProductList = () => {
    // This function will be passed to AddProductModal and will be called after a product is added successfully.
  };

  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Header style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '64px',
          padding: '0 50px',
          backgroundColor: '#001529'
      }}>
        <h1 style={{ color: 'white', margin: 0 }}>My Product Store</h1>
      </Header>
      <Content style={{ padding: '50px', marginTop: '64px' }}>
        <Button 
          type="primary" 
          onClick={() => setIsModalVisible(true)} 
          style={{ position: 'fixed', right: 20, top: 20 }}
        >
          Add Product
        </Button>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <ProductList />
        </div>
        <AddProductModal 
          isModalVisible={isModalVisible} 
          setIsModalVisible={setIsModalVisible} 
          refreshProductList={refreshProductList}
        />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        My Product Store ©2023 Created by Bhanu Chaddha
      </Footer>
    </Layout>
  );
}

export default App;
