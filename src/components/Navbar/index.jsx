import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/_Navbar.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faEarthAmericas,
  faBars,
  faTimes,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import ThemeDark from "../ThemeDark";
import { CartContext } from "../../cartContext";

const Navbar = () => {
  const { theme, toggleTheme } = ThemeDark();
  const { cart, setCart } = useContext(CartContext);

  // const findTotalQuantity = cart.reduce((acc, product) => acc + product.quantity, 0);
  const findTotalQuantity = cart.length > 0 ? cart.reduce((acc, product) => acc + product.quantity, 0) : "";



  const [open, setOpen] = useState(false);
  const [showShadow, setShowShadow] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setOpen(!open);
    setShowShadow(!showShadow);
  };

  const closeMenu = () => {
    setOpen(false);
    setShowShadow(false);
  };


  console.log("Cart:", cart);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        open &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);


  return (
    <div
      className={`w-full fixed z-10 top-0 left-0 right-0 ${
        showShadow ? "" : "shadow"
      }`}
    >
      <div
        className={`${
          theme === "dark" ? "dark" : ""
        } nav-menu flex items-center justify-between bg-white py-4 lg:py-0 md:px-10 px-7`}
      >
        <div className="flex items-center gap-4">
          <div
            onClick={toggleMenu}
            className="cursor-pointer lg:hidden w-7 h-7"
            ref={buttonRef}
          >
            {open ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>

          <Link to="/">
            <div className="waviy nav-text font-neucha text-3xl">
              <span style={{ "--i": 1 }}>B</span>
              <span style={{ "--i": 2 }}>U</span>
              <span style={{ "--i": 3 }}>R</span>
              <span style={{ "--i": 4 }}>R</span>
              <span style={{ "--i": 5 }}>O</span>
              <span style={{ "--i": 6 }}>W</span>
            </div>
          </Link>
        </div>
        <ul
          ref={menuRef}
          className={`nav-list lg:flex justify-center lg:items-center lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 transition-all duration-500 ease-in ${
            open ? "top-16" : "top-[-490px]"
          } `}
        >
          <li
            className="flex justify-center lg:ml-4 xl:ml-8 my-7 font-semibold"
            onClick={closeMenu}
          >
            <Link to="/" className="nav-item">
              Home
            </Link>
          </li>

          <li
            className="flex justify-center lg:ml-4 xl:ml-8 my-7 font-semibold"
            onClick={closeMenu}
          >
            <Link to="/products" className="nav-item">
              Products
            </Link>
          </li>
          <li
            className="flex justify-center lg:ml-4 xl:ml-8 my-7 font-semibold"
            onClick={closeMenu}
          >
            <Link to="/" className="nav-item">
              Labor Day Sale
            </Link>
          </li>
          <li
            className="flex justify-center lg:ml-4 xl:ml-8 my-7 font-semibold"
            onClick={closeMenu}
          >
            <Link to="/blog" className="nav-item">
              Blog
            </Link>
          </li>
          <li
            className="flex justify-center lg:ml-4 xl:ml-8 my-7 font-semibold"
            onClick={closeMenu}
          >
            <Link to="/" className="nav-item">
              Contact
            </Link>
          </li>

          <li
            className="flex justify-center lg:ml-4 xl:ml-8 my-7 font-semibold"
            onClick={closeMenu}
          >
            <Link to="/" className="nav-item">
              Favorites <FontAwesomeIcon icon={faHeart} />
            </Link>
          </li>
        </ul>

        <div className="nav-end flex justify-end w-6/6 lg:w-2/6 h-5">
          <ul className="flex">
            <li className="mx-2 cursor-pointer">
              <FontAwesomeIcon
                icon={theme === "dark" ? faSun : faMoon}
                onClick={toggleTheme}
              />
            </li>
            <li className="mx-2 cursor-pointer">
              <FontAwesomeIcon icon={faEarthAmericas} />
            </li>
            <li className="mx-2 cursor-pointer">
              <FontAwesomeIcon icon={faUser} />
            </li>

            <li
              className="basket mx-2 cursor-pointer"
              style={{ position: "relative" }}
            >
              <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="absolute bottom-0.5 left-2 font-bold rounded-full p-1">{findTotalQuantity}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
