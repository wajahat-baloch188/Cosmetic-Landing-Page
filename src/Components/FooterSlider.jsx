"use client";
import image2 from "../../public/images/about-img/s2.png";
import image3 from "../../public/images/about-img/s3.png";
import image4 from "../../public/images/about-img/s4.png";
import image5 from "../../public/images/about-img/s5.png";
import image6 from "../../public/images/about-img/s6.png";

// // ======================
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

const FooterSlider = () => {
  const [settings, setSettings] = useState({
    // dots: true,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    cssEase: "linear",
  });

  const images = [
    image5,
    image4,
    image3,
    image4,
    image2,
    image3,
    image6,
    image2,
    image4,
    image2,
    image3,
    image4,
  ];

  useEffect(() => {
    const updateSliderSettings = () => {
      const windowWidth = window.innerWidth;
      let newSettings = { ...settings };

      if (windowWidth < 400) {
        newSettings.slidesToShow = 1;
        newSettings.slidesToScroll = 1;
      } else {
        newSettings.slidesToShow = 8;
        newSettings.slidesToScroll = 1;
      }

      setSettings(newSettings);
    };

    updateSliderSettings();
    window.addEventListener("resize", updateSliderSettings);

    return () => window.removeEventListener("resize", updateSliderSettings);
  }, []);

  return (
    <Box className="slider-container" mb={{ base: 20, md: 15 }}>
      <Slider {...settings}>
        {images.map((elem, i) => (
          <Flex
            key={i}
            px={2}
            width={{ base: "30%", md: 200 }}
            height={{ base: "1%", md: 200 }}
          >
            <Image src={elem} alt={`Slide ${i + 1}`} layout="responsive" />
          </Flex>
        ))}
      </Slider>
    </Box>
  );
};

export default FooterSlider;
