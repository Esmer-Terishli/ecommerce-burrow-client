import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "../../assets/styles/_Testimonial.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import testImage from "../../assets/images/test-image.jpg";
import person1 from "../../assets/images/person1.jpg";
import person2 from "../../assets/images/person2.jpg";
import person3 from "../../assets/images/person3.jpg";

const testimonials = [
  {
    id: 1,
    title: "Sarah",
    content:
      "My home has been transformed with the addition of your beautiful furniture pieces. ",
    image: person1,
  },
  {
    id: 2,
    title: "John",
    content: "The quality of the furniture exceeded my expectations. ",
    image: person2,
  },
  {
    id: 3,
    title: "Jennifer",
    content: "LI am absolutely thrilled with my experience shopping at Burrow.",
    image: person3,
  },
  {
    id: 4,
    title: "Susan",
    content: "Thank you, Burrow, for your outstanding products and exceptional service. ",
    image: person1,
  },
  {
    id: 5,
    title: "David",
    content: "Burrow has now become my go-to destination for all my furniture needs. ",
    image: person2,
  },
];

const Testimonial = () => {
  return (
    <>
      <div className="testimonial flex">
        <div className="test container mx-auto flex items-center w-full h-full">
          <div className="test-image w-1/2 h-full">
            <img src={testImage} alt="" className="hidden md:block w-full h-full object-cover" />
          </div>

          <div className="swip flex justify-center items-center w-1/2">
            <div className="test-swiper">
              <Swiper
                cssMode={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                loop={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.id}`}
                      className="rounded-full"
                    />
                    <div className="icons">
                      <FontAwesomeIcon icon={faStar} className="mx-0.5" />
                      <FontAwesomeIcon icon={faStar} className="mx-0.5" />
                      <FontAwesomeIcon icon={faStar} className="mx-0.5" />
                      <FontAwesomeIcon icon={faStar} className="mx-0.5" />
                      <FontAwesomeIcon icon={faStar} className="mx-0.5" />
                    </div>
                    <b>{testimonial.title}</b>
                    <p className="px-12 md:px-24 pt-3 text-justify">{testimonial.content}</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
