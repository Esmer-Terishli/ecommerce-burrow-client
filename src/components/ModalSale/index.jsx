import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "../../assets/styles/_ModalSale.style.scss";

function ModalSale() {
  const [modalData, setModalData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("http://localhost:5000/api/products")
        .then((response) => {
          const data = response.data;
          const randomProduct = data[Math.floor(Math.random() * data.length)];
          setModalData([randomProduct]);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    const showModalInterval = setInterval(() => {
      setModalVisible(true);
      fetchData();
    }, 30000);

    const hideModalInterval = setInterval(() => {
      setModalVisible(false);
    }, 20000);

    return () => {
      clearInterval(showModalInterval);
      clearInterval(hideModalInterval);
    };
  }, []);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      {modalVisible && (
        <div className="modal fixed bottom-12 right-20 w-1/2 md:w-1/3 lg:w-1/4 z-10 flex items-center rounded-md">
          <div className="modal-header flex justify-end">
            <button className="modal-close-button" onClick={closeModal}>
              <FontAwesomeIcon
                icon={faTimes}
                className="absolute top-3 right-3 text-xl cursor-pointer"
                onClick={closeModal}
              />
            </button>
          </div>
          <ul>
            {modalData &&
              modalData.map((product) => (
                <li
                  key={product.id}
                  className="flex flex-col sm:flex-row items-center text-center py-5"
                >
                  <div className="w-1/2 h-full lg:px-5">
                    <p className="product-name font-extrabold mb-1">
                      {product.name}
                    </p>
                    <p>
                      <span className="text-colors font-medium">
                        Discount:{" "}
                      </span>{" "}
                      <span>{product.discount}%</span>
                    </p>
                    <span className="text-colors font-medium">Price: </span>{" "}
                    <span className="text-line line-through mr-2">
                      {" "}
                      {product.price}
                    </span>
                    <span className="text-colors">
                      ~{" "}
                      {Number(product.price) -
                        (product.price * product.discount) / 100}
                    </span>
                  </div>

                  <div className="w-1/2 h-1/4 lg:h-full flex mr-2">
                    <img
                      src={`http://localhost:5000/${product.productImage}`}
                      className="w-full h-full"
                      alt="modalimage"
                    />
                  </div>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default ModalSale;
