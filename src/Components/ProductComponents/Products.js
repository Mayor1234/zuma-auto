import { React, useEffect, useState } from "react";
import "./Products.style.scss";
import data from "../../Data";
import ProductsPreview from "./ProductsPreview";
import SearchComponent from "../SearchComponent/SearchComponent";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <>
    
      <SearchComponent products={products} />
      <div className="products row">
        {products.map((product) => (
          <ProductsPreview key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
