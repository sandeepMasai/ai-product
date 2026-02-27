import "../App.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3 className="product-title">{product.name}</h3>

      <span className="product-category">{product.category}</span>

      <p className="product-description">{product.description}</p>

      <p className="product-price">₹ {product.price}</p>
    </div>
  );
}

export default ProductCard;
