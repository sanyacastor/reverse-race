import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const SwiperContainer = styled.div`
  & ul {
    margin: 0;
    list-style: none;
  }
`;

function Slider({ images, ndx }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const slides = [];
  for (let i = 0; i < images.length; i += 1) {
    slides.push(
      <SwiperSlide
        key={`slide-${i}`}
        tag="li"
        style={{
          listStyle: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={images[i].node.childImageSharp.fluid.src}
          alt={`Slide ${i}`}
          className="slide-image"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
      </SwiperSlide>
    );
  }

  const thumbs = [];
  for (let i = 0; i < images.length; i += 1) {
    thumbs.push(
      <SwiperSlide key={`slide-${i}`} tag="li" style={{ listStyle: "none" }}>
        <img
          src={images[i].node.childImageSharp.fluid.src}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  return (
    <SwiperContainer>
      <Swiper
        controller={{ control: controlledSwiper }}
        tag="section"
        wrapperTag="ul"
        navigation
        spaceBetween={0}
        slidesPerView={1}
        initialSlide={ndx}
        observer={true}
        observeParents={true}
        style={{ listStyle: "none", height: "calc(100vh - 40px)" }}
      >
        {slides}
      </Swiper>
    </SwiperContainer>
  );
}

export default Slider;
