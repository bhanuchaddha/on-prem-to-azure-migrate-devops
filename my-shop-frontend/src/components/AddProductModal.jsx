// src/components/AddProductModal.jsx
import React from 'react';
import { Modal, Form, Input, Button, notification } from 'antd';
import ApiService from '../api/ApiService';

const AddProductModal = ({ isModalVisible, setIsModalVisible, fetchProducts }) => {
  const [form] = Form.useForm();

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleAddProduct = async (product) => {
    try {
      await ApiService.addProduct(product);
      setIsModalVisible(false);
      notification.success({ message: 'Product added successfully' });
      form.resetFields();
    } catch (error) {
      notification.error({ message: 'Error adding product', description: error.message });
    }
  };

  return (
    <Modal title="Add New Product" visible={isModalVisible} onCancel={handleCancel} footer={null}>
      <Form form={form} onFinish={handleAddProduct}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description" rules={[{ required: true }]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="price" label="Price" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name="imageUrl" label="Image URL">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Product
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddProductModal;
