import React, { useState } from 'react';

const ProductState = () => {
  //다양한 상태변화를 요구하는 폼들이 많을 경우 useReducer로 하는 것이 더 효율적이다.
  const [products, setProducts] = useState([
    { id: 1, title: 'black sneakers', quantity: 1 },
    { id: 2, title: 'red T-shirts', quantity: 1 },
    { id: 3, title: 'blue jeans', quantity: 1 },
  ]);

  // const [selectedProduct, setSelectedProduct] = useState({});
  const [selectedId, setSelectedId] = useState(null);
  const selectedProduct = products.find((p) => p.id === selectedId);

  const increment = (id) => {
    setProducts((prev) => {
      return prev.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 };
        } else return product;
      });
    });
  };

  const handleChoose = (id) => {
    // const product = products.find((p) => p.id === id);
    // setSelectedProduct(product);
    setSelectedId(id);
  };
  return (
    <div>
      <h4>All products</h4>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.title}
            <button onClick={() => handleChoose(product.id)}>Choose</button>
          </span>
          <div>
            <button>-</button>
            <span>{product.quantity}</span>
            <button onClick={() => increment(product.id)}>+</button>
          </div>
        </div>
      ))}
      <h4>Selected Product</h4>
      <span>{selectedProduct?.title}</span>
      <span>{selectedProduct?.quantity}</span>
    </div>
  );
};

export default ProductState;
