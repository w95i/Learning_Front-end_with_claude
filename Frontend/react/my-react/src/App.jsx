import { useState } from "react";

function Button({ variant = "primary", children, ...rest }) {
  return (
    <button className={`btn btn-${variant}`} {...rest}>
      {children}
    </button>
  );
}

function Card({ title, footer, children }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
      <div>{footer}</div>
    </div>
  );
}

function ProductCard({ product: { name, price, inStock }, onBuy, onRemove }) {

  return (
    <Card
      title={name}
      footer={
        <>
          <Button onClick={() => onBuy(name)} disabled={!inStock}>
            {inStock ? "شراء" : "نفِد"}
          </Button>
          <Button variant="danger" onClick={() => onRemove(name)}>
            حذف
          </Button>
        </>
      }
    >
      <p>السعر: {price}</p>
      <p>المخزون: {inStock ? "متوفر" : "غير متوفر"}</p>
    </Card>
  );
}

export default function App() {
  const products = [
    { name: "Product 1", price: 100, inStock: true },
    { name: "Product 2", price: 200, inStock: false },
    { name: "Product 3", price: 300, inStock: true },
  ];

  const handleRemove = (productName) => {
    alert(`${productName} removed successfully`);
    products.splice(products.indexOf(productName), 1);
  };

  const handleBuy = (productName) => {
    alert(`${productName} bought successfully`);
  };

  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={product.name}
          product={product}
          onBuy={handleBuy}
          onRemove={handleRemove}
        />
      ))}
    </>
  );
}
