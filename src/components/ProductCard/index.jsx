import React from "react";
import "../../assets/styles/_ProductCard.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ name, price, imgUrl, onClick }) => {
  return (
    <div className="productCard rounded-xl">
      <div className="img-container">
        <img
          src={`http://localhost:5000/${imgUrl}`}
          alt="product"
        />
      </div>

      <div className="product-content flex items-center justify-between px-3 py-4">
        <div className="content-text">
          <h3 className="product-name font-bold">{name}</h3>
          <h4 className="price">{`Price: ${price}$`}</h4>
        </div>

        <button onClick={onClick} className="btn px-5 py-2">
          Add to cart
          <FontAwesomeIcon icon={faShoppingCart} className="btn-icon pl-3" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
