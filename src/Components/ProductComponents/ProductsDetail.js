import React from "react";
import "./ProductsDetail.style.scss";
import data from "../../Data";
import { useParams } from "react-router-dom";
import {
  FaAssistiveListeningSystems,
  FaBolt,
  FaCalendarTimes,
  FaCar,
  FaGasPump,
  FaPaintRoller,
  FaScrewdriver,
} from "react-icons/fa";

const ProductsDetail = () => {
  const { id } = useParams();

  const product = data.find((item) => {
    return item.id === id;
  });

  return (
    <div>
      <div className="productDetailContainer row">
        <div className="col3">
          <div className="productImg">
            <div className="img-top">
              <h3>{product.name}</h3>
              <img
                className="imgDetail"
                src={product.imageUrl}
                alt={`${product.name}`}
              />
            </div>
            <div className="descrription-container">
              <h3 className="descripption">Description</h3>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
        <div className="col1-5">
          <dl className="products-description">
            <div className="dd-item">
              <dt>
                <FaCar className="icon" />
                Make:
              </dt>
              <dd>{product.name}</dd>
            </div>

            <div className="dd-item">
              <dt>
                <FaScrewdriver className="icon" />
                Model:
              </dt>
              <dd>Series 5</dd>
            </div>

            <div className="dd-item">
              <dt>
                <FaCalendarTimes className="icon" />
                Year:
              </dt>
              <dd>{product.year}</dd>
            </div>
            <div className="dd-item">
              <dt>
                <FaBolt className="icon" />
                Transmission:
              </dt>
              <dd>{product.trasmission}</dd>
            </div>
            <div className="dd-item">
              <dt>
                <FaGasPump className="icon" />
                Mileage:
              </dt>
              <dd>1,200</dd>
            </div>
            <div className="dd-item">
              <dt>
                <FaPaintRoller className="icon" />
                color:
              </dt>
              <dd>{product.color}</dd>
            </div>
            <div className="dd-item">
              <dt>
                <FaAssistiveListeningSystems className="icon" />
                Warranty:
              </dt>
              <dd>{product.warranty}</dd>
            </div>
          </dl>

          <div className="card-body">
            <ul>
              <li>
                <div className="card">
                  <div>Price:</div>
                  <div>{product.price}</div>
                </div>
              </li>
              <li>
                <div className="card">
                  <div>Status:</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">In stock</span>
                    ) : (
                      <span className="error"> Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="btn btn-block">Add to cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
