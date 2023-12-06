// ApiService.js
const MY_SHOP_API_URL  = import.meta.env.VITE_MY_SHOP_API_URL;

const ApiService = {
  getProducts: async () => {
    const response = await fetch(`${MY_SHOP_API_URL}/products`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  },
  addProduct: async (productData) => {
    const response = await fetch(`${MY_SHOP_API_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });
    if (!response.ok) {
      throw new Error('Failed to add product');
    }
    return response.json();
  },
  
  // Define other API methods here if necessary
};

export default ApiService;
