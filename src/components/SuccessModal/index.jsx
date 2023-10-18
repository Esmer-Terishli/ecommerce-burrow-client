import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "../../assets/styles/_SuccessModal.style.scss";

const SuccessModal = ({ isOpen, onClose, successMessage }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal flex items-center justify-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-md w-1/3 h-1/3 py-36">
      <FontAwesomeIcon
        icon={faTimes}
        className="absolute top-2 right-2 text-gray-500 cursor-pointer w-6 h-6"
        onClick={onClose}
      />

      <div className="success-icon flex flex-col items-center">
        <p className="success-text font-semibold text-2xl">{successMessage}</p>
      </div>
    </div>
  );
};

export default SuccessModal;
