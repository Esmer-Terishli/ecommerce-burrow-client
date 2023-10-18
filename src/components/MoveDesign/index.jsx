import React from 'react';
import "../../assets/styles/_MoveDesign.style.scss";

import movevideo from '../../assets/videos/move-video.mp4';

const MoveDesign = () => {
  return (
    <div className='move-design py-16 my-16'>
    <h1 className='text-center pb-16 font-neucha'>Modular, easy-to-move design</h1>
    <div className="relative w-full h-screen">
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src={movevideo} type="video/mp4" />
      </video>
    </div>
    </div>
  );
};

export default MoveDesign;
