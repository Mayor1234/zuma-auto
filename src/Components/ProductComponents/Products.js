import { React, useEffect, useState } from "react";
import "./Products.style.scss";
import data from "../../Data";
import ProductsPreview from "./ProductsPreview";


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <>
      <h2 className="row">Latest Cars</h2>
      
      <div className="products row">
        {products.map((product) => (
          <ProductsPreview key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
