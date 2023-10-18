import { useContext } from "react";
import CheckoutCard from "../components/CheckoutCard";
import { CartContext } from "../cartContext";
import "../assets/styles/_Cart.style.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const { cart, setCart, removeFromCart, addToCart } = useContext(CartContext);

  const handleIncrease = (productId) => {
    addToCart(productId);
  };

  const handleRemoveOne = (productId) => {
    const updatedCart = [...cart];

    const productIndex = updatedCart.findIndex(
      (product) => product.id === productId
    );

    if (productIndex !== -1) {
      if (updatedCart[productIndex].quantity > 1) {
        updatedCart[productIndex].quantity -= 1;
      } else {
        updatedCart.splice(productIndex, 1);
      }

      setCart(updatedCart);
    }
  };

  const findTotalPrice = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <>
      <div className="cart container mx-auto flex flex-col my-24">
        <h1 className="waviy nav-text font-neucha text-5xl font-semibold text-center pt-5">
          CART
        </h1>

        <div className="checkoutCard-list flex flex-col">
          {cart.map((product) => (
            <CheckoutCard
              key={product.id}
              name={product.name}
              price={product.price}
              imgUrl={product.productImage}
              quantity={product.quantity}
              onIncrease={() => handleIncrease(product.id)}
              onDecrease={() => handleRemoveOne(product.id)}
              onClick={() => removeFromCart(product.id)}
            />
          ))}
        </div>

        <div className="total-btn flex justify-center">
          <button className="w-2/5 py-3 rounded-md font-bold text-xl my-16">
            Total: {findTotalPrice} $
          </button>
        </div>

        <div className="checkout-btn flex justify-center">
          <Link to="/contactform">
            <button className=" px-5 py-2 rounded-md font-semibold">
              Checkout{" "}
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="ml-1" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
