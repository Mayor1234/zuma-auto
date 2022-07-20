import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const BackComponent = ({product}) => {
  return (
    <div className="back">
        <div className="backWrap row">
          <h3>{product.name}</h3>
          <FaArrowLeft className="icon" />
          <Link to="/products">
            Back
          </Link> 
            / {product.name}
        </div>
      </div>
  )
}

export default BackComponent;
