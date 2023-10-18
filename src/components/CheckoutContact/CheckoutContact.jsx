import React from "react";
import "../../assets/styles/_CheckoutContact.style.scss";

const CheckoutContact = ({ name, price, quantity }) => {
  return (
    <div className="pt-8 px-8">
      <div className="content flex justify-between">
        <div className="content-header">
          <h3 className="text-color font-bold">{name}</h3>
          <span>Quantity: </span> <span className="font-bold">{quantity}</span>
        </div>
        <div className="content-price">
          <h4 className="font-bold">{`${price}$`}</h4>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CheckoutContact;
