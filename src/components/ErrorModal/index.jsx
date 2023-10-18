// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import "../../assets/styles/_ErrorModal.style.scss";

// const ErrorModal = ({ isOpen, onClose, errorMessage }) => {
//   if (!isOpen) {
//     return null;
//   }

//   return (
//     <div className="modal flex items-center justify-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-md w-1/3 h-1/3 py-36">
//       <FontAwesomeIcon
//         icon={faTimes}
//         className="absolute top-2 right-2 text-gray-500 cursor-pointer w-6 h-6"
//         onClick={onClose}
//       />

//       <div className="error-icon flex flex-col items-center">
//         <div className="error-border w-20 h-20 flex items-center justify-center rounded-full border-4">
//           <FontAwesomeIcon
//             icon={faTimes}
//             className="cursor-pointer w-10  h-10 text-5xl"
//           />
//         </div>
//         <h1 className="text-4xl font-semibold pt-2 pb-10">Oops...</h1>
//         <p className="error-text font-semibold text-2xl">{errorMessage}</p>
//       </div>
//     </div>
//   );
// };

// export default ErrorModal;
