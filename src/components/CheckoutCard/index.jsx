import React from "react";
import "../../assets/styles/_CheckoutCard.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CheckoutCard = ({ name, price, imgUrl, onClick, quantity, onIncrease, onDecrease }) => {
  const handleIncrease = () => {
    onIncrease(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      onDecrease(quantity - 1);
    }
  };

  return (
    <div className="mt-9 flex justify-center">
      <div className="checkoutCard rounded-md w-full lg:w-2/5 flex items-center">
        <div className="img-container w-full h-full">
          <img src={`http://localhost:5000/${imgUrl}`} className="rounded-md object-cover h-full" alt="product" />
        </div>
        <div className="content w-2/3 px-6 flex items-center text-center">
          <div>
          <h3 className="font-bold text-xl pb-2">{name}</h3>
          <h4 className="font-semibold">{`Price: ${price}$`}</h4>
          </div>
        <div className="quantity-buttons w-24 flex justify-between items-center py-2">
          <button onClick={handleDecrease} className="btn minus font-bold">
            -
          </button>
          <h4 className="font-semibold">{quantity} </h4>
          <button onClick={handleIncrease} className="btn plus font-bold">
            +
          </button>
        </div>

        <button onClick={onClick} className="error rounded-md">
          <FontAwesomeIcon icon={faTrash} className="error-icon" />
        </button>

        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
