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

function ProductCard({ product: { id, name, price, stock }, onBuy, onRemove }) {
  return (
    <Card
      title={name}
      footer={
        <>
          <Button onClick={() => onBuy(id)} disabled={stock <= 0}>
            {stock > 0 ? "شراء" : "نفِد"}
          </Button>
          <Button variant="danger" onClick={() => onRemove(id)}>
            حذف
          </Button>
        </>
      }
    >
      <p>السعر: {price}</p>
      <p>المخزون: {stock > 0 ? stock : "غير متوفر"}</p>
    </Card>
  );
}

export default function App() {
  const allProducts = [
    { id: 1, name: "Product 1", price: 100, stock: 10 },
    { id: 2, name: "Product 2", price: 200, stock: 0 },
    { id: 3, name: "Product 3", price: 300, stock: 10 },
  ];
  const [products, setProducts] = useState(allProducts);

  const handleRemove = (productId) => {
    alert(`${productId} removed successfully`);
    const newProducts = products.filter((product) => product.id !== productId);
    setProducts(newProducts);
  };

  const handleBuy = (productId) => {
    alert(`${productId} bought successfully`);
    const newStock = products.map((product) =>
      product.id === productId
        ? { ...product, stock: product.stock - 1 }
        : product,
    );
    setProducts(newStock);
  };

  const handleAscending = () => {
    const sortedProducts = products.toSorted((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  const handleDescending = () => {
    const sortedProducts = products.toSorted((a, b) => b.price - a.price);
    setProducts(sortedProducts);
  };

  const handleShowOnlyAvailable = (checked) => {
    if (checked) {
      const filteredProducts = products.filter((product) => product.stock > 0);
      setProducts(filteredProducts);
    } else {
      setProducts(allProducts);
    }
  };

  return (
    <>
      <h1>Products</h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <Button onClick={() => handleDescending}>
          ترتيب حسب السعر : تنازلي
        </Button>
        <Button onClick={() => handleAscending}>
          ترتيب حسب السعر : تصاعدي
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <p>اظهار المتاح فقط :</p>
        <input
          type="checkbox"
          onChange={(e) => handleShowOnlyAvailable(e.target.checked)}
        />
      </div>
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
