import React, { useState, useEffect, useRef } from "react";
import "../../assets/styles/_ModalAdvertising.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import advertising from "../../assets/images/advertising.jpg";

function ModalAdvertising() {
  const [modalVisible, setModalVisible] = useState(false);
  const modalContentRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalVisible(true);
    }, 120000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (modalContentRef.current) {
      modalContentRef.current.style.height = `${modalContentRef.current.scrollHeight}px`;
    }
  }, [modalVisible]);

  const closeModal = () => {
    setModalVisible(false);

    setTimeout(() => {
      setModalVisible(true);
    }, 120000);
  };

  return (
    <div>
      {modalVisible && (
        <>
          <div className="modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-sm w-3/4 h-3/4">
            <div className="flex h-full justify-center md:justify-normal">
              <div className="w-1/2 md:p-8 flex flex-col justify-center items-center">
                <h1 className="font-neucha font-bold text-4xl text-center">
                  BURROW
                </h1>
                <button
                  className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
                  onClick={closeModal}
                >
                  <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
                </button>
                <h2 className="pt-8 pb-12 text-center text-md md:text-xl xl:text-5xl font-bold xl:font-thin">
                  Save 15% on your first order*
                </h2>
                <div className="flex flex-col justify-center items-center">
                  <button className="offer my-1 w-full h-full px-4 md:px-8 py-3 rounded-sm duration-1000 text-xs md:text-md">
                    CLAIM YOUR OFFER
                  </button>
                  <button
                    className="close my-1 w-full h-full px-4 md:px-8 py-3 rounded-sm duration-1000 text-xs md:text-md"
                    onClick={closeModal}
                  >
                    NO THANKS
                  </button>
                </div>
              </div>

              <div className="w-1/2 h-full hidden md:block">
                <img
                  src={advertising}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ModalAdvertising;
