import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const SwiperContainer = styled.div`
  & ul {
    margin: 0;
    list-style: none;
  }

  & .slide-image {
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
  & .swiper-button-prev,
  & .swiper-button-next {
    width: 14px;
    height: 26px;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 40 73' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36.181 32.786L3.395 0L0 3.492L30.264 33.756L32.6563 36.131L30.361 38.606L0 68.967L3.492 72.362L39.673 36.181L36.181 32.786Z' fill='white'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    bottom: 24px;
    top: initial;
  }
  & .swiper-button-prev {
    transform: rotate(180deg);
  }
  & .swiper-button-prev:after,
  & .swiper-button-next:after {
    display: none;
  }

  @media (min-width: 780px) {
    & .slide-image {
      width: 100%;
      max-height: 100%;
      margin: 0 80px;
      box-sizing: border-box;
    }
    & .swiper-button-prev,
    & .swiper-button-next {
      width: 40px;
      height: 73px;
      bottom: initial;
      top: 50%;
    }
    & .swiper-button-prev {
      transform: rotate(180deg);
    }
    & .swiper-button-prev:after,
    & .swiper-button-next:after {
      display: none;
    }
  }
`;

function Slider({ images, ndx }) {
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
        <GatsbyImage
          image={images[i].node.childImageSharp.gatsbyImageData}
          alt={`Slide ${i}`}
          objectFit="contain"
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
          src={images[i].node.childImageSharp.gatsbyImageData.src}
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
