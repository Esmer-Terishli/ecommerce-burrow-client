import React from 'react';
import "../../assets/styles/_SaleFurniture.style.scss";

import sofa1 from '../../assets/images/sofa1.jpg';
import sofa2 from '../../assets/images/sofa2.jpg';
import sofa3 from '../../assets/images/sofa3.jpg';
import sofa4 from '../../assets/images/sofa4.jpg';
import sofa5 from '../../assets/images/sofa5.jpg';
import sofa6 from '../../assets/images/sofa6.jpg';



const images = [
  sofa1,
  sofa2,
  sofa3,
  sofa4,
  sofa5,
  sofa6,

];

const SaleFurniture = () => {
  return (
    <div className="sale-furniture md:container md:mx-auto py-20">
      <h1 className='text-center pb-16 font-neucha'>Design deals, delivered free</h1>
      <div className="flex flex-wrap">
        {images.map((image, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <img src={image} alt={`${index}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SaleFurniture;
