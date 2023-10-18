import React, { useState, useContext, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "../assets/styles/_Products.style.scss";
import { CartContext } from "../cartContext";
import ModalAdvertising from "../components/ModalAdvertising";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const { products, addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [selectedColor, setSelectedColor] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (product) =>
        (selectedCategory === "" || product.category === selectedCategory) &&
        (selectedColor === "all" || product.color === selectedColor) &&
        (selectedBrand === "" || product.brand === selectedBrand) &&
        product.price >= minPrice &&
        product.price <= maxPrice
    );

  useEffect(() => {
    setSortOrder("default");
  }, []);

  const sortedProducts = filteredProducts.sort((a, b) => {
    const priceA = a.price;
    const priceB = b.price;
    if (sortOrder === "asc") {
      return priceA - priceB;
    } else if (sortOrder === "desc") {
      return priceB - priceA;
    } else {
      return 0;
    }
  });

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    setSelectedColor("all");
  };

  const filterByColor = (color) => {
    setSelectedColor(color);
  };

  const filterByBrand = (brand) => {
    setSelectedBrand(brand);
  };

  const noProductsFound = sortedProducts.length === 0;

  return (
    <>
      <div className="nav-section container mx-auto xl:flex mt-36">
        <div className="search-container container mx-auto xl:mx-0 w-2/4 xl:w-1/4 relative mb-8 xl:mb-0">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8 pr-10 py-2 border rounded-full w-full"
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div>

        <div className="category-buttons xl:w-3/4 xl:px-12">
          <ul className="category-list flex flex-wrap justify-center xl:justify-around">
            <li
              className={selectedCategory === "" ? "active" : ""}
              onClick={() => filterByCategory("")}
            >
              All Category
            </li>
            <li
              className={selectedCategory === "sofa" ? "active" : ""}
              onClick={() => filterByCategory("sofa")}
            >
              Sofa
            </li>
            <li
              className={selectedCategory === "table" ? "active" : ""}
              onClick={() => filterByCategory("table")}
            >
              Table
            </li>
            <li
              className={selectedCategory === "bed" ? "active" : ""}
              onClick={() => filterByCategory("bed")}
            >
              Bed
            </li>
            <li
              className={selectedCategory === "rugs" ? "active" : ""}
              onClick={() => filterByCategory("rugs")}
            >
              Rugs
            </li>
            <li
              className={selectedCategory === "chair" ? "active" : ""}
              onClick={() => filterByCategory("chair")}
            >
              Chair
            </li>
            <li
              className={selectedCategory === "shelves" ? "active" : ""}
              onClick={() => filterByCategory("shelves")}
            >
              Shelves
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-8 xl:mt-20 flex flex-col xl:flex-row">
        <div className="choice-section xl:w-1/5  xl:mr-12 mb-8 xl:mb-0 flex justify-around xl:inline-block">
          <div className="filter-container w-1/4 xl:w-full">
            <select
              className="block w-full h-1/5 xl:py-2 px-4 mb-6 xl:mb-0 border rounded-lg shadow-md focus:outline-none focus:ring focus:border-blue-300 mx-2 xl:mx-0"
              onChange={(e) => setSortOrder(e.target.value)}
              value={sortOrder}
            >
              <option value="default" disabled>
                Sort By
              </option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>

            <select
              className="color-section block w-full h-1/5 xl:py-2 border rounded-lg shadow-md xl:mt-4 focus:outline-none focus:ring focus:border-blue-300 mx-2 xl:mx-0"
              onChange={(e) => filterByColor(e.target.value)}
              value={selectedColor}
            >
              <option value="all" className="font-bold">
                All Colors
              </option>
              <option value="white">White</option>
              <option value="grey">Grey</option>
              <option value="green">Green</option>
              <option value="black">Black</option>
              <option value="brown">Brown</option>
              <option value="yellow">Yellow</option>
              <option value="blue">Blue</option>
            </select>
          </div>

          <div className="brand-filter xl:mt-4 w-1/4 xl:w-full flex flex-col items-center xl:inline-block">
            <h3 className="text-header text-lg font-semibold mb-2 xl:mt-12">
              Brand:
            </h3>
            <div className="radio-buttons">
              <label className="flex items-center">
                <input
                  type="radio"
                  value=""
                  checked={selectedBrand === ""}
                  onChange={() => filterByBrand("")}
                  className="form-radio h-5 w-5 mr-2"
                />
                <span className="text-md font-bold">All Brands</span>
              </label>

              {Array.from(
                new Set(products.map((product) => product.brand))
              ).map((brand) => (
                <label key={brand} className="flex items-center mt-1">
                  <input
                    type="radio"
                    value={brand}
                    checked={selectedBrand === brand}
                    onChange={() => filterByBrand(brand)}
                    className="form-radio h-5 w-5 mr-2"
                  />
                  <span className="text-md">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="filter-container xl:mt-12 w-1/4 xl:w-full">
            <label className="text-header block text-lg font-semibold mb-2">
              Price Range:
            </label>
            <input
              type="range"
              min="0"
              max="1000"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between">
              <span>${minPrice}</span>
              <span>${maxPrice}</span>
            </div>
          </div>
        </div>

        <div className="home flex w-full justify-center">
          {noProductsFound ? (
            <>
              <h1> </h1>
              <h1 className="flex justify-center font-bold text-3xl">
                No products found
              </h1>
              <h1> </h1>
            </>
          ) : (
            sortedProducts
              .filter(
                (product) =>
                  (selectedCategory === "" ||
                    product.category === selectedCategory) &&
                  (selectedColor === "all" ||
                    product.color === selectedColor) &&
                  (selectedBrand === "" || product.brand === selectedBrand)
              )
              .map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  imgUrl={product.productImage}
                  onClick={() => addToCart(product.id)}
                />
              ))
          )}
        </div>
      </div>

      <ModalAdvertising />
    </>
  );
};

export default Products;
