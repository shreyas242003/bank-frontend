import React from "react";

import { CCarousel, CImage, CCarouselItem } from "@coreui/react";
const CarouselSlider = ({ data }) => {
  return (
    <CCarousel controls transition="crossfade">
      {data?.map((item, index) => (
        <CCarouselItem key={index}>
          <CImage
            className="d-block w-100"
            src={`${import.meta.env.VITE_BACKEND_URL}${item}`}
            alt={`slide ${index}`}
          />
        </CCarouselItem>
      ))}
    </CCarousel>
  );
};
export default CarouselSlider;
