import React from "react";
import { Link } from "react-router-dom";
import "./ProductsPreview.style.scss";

const ProductsPreview = ({product}) => {
  const { id, name, price, year, imageUrl } = product;
  return (
    
    <div className="products-preview row">
      <div className="card-container">
        <div className="img-container">
          <div className="img">
            <Link to={`/products/${id}`}>
              <img
                className="products-img"
                src={process.env.PUBLIC_URL + `${imageUrl}`}
                alt={`${name}`}
              />
            </Link>
          </div>
          <div className="img-footer">
            <p>
            
              <Link to={`/products/${id}`}>
                {name} {year}
              </Link>
            </p>
            <p>{price}</p>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default ProductsPreview;
