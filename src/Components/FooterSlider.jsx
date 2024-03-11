"use client";
// "use client";
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; // Import CSS for proper styling
// import "slick-carousel/slick/slick-theme.css"; // Import theme for customization (optional)
// import { Box, Flex } from "@chakra-ui/react";
// import image1 from "../../public/images/about-img/s1.png";
import image2 from "../../public/images/about-img/s2.png";
import image3 from "../../public/images/about-img/s3.png";
import image4 from "../../public/images/about-img/s4.png";
import image5 from "../../public/images/about-img/s5.png";
import image6 from "../../public/images/about-img/s6.png";
// import Image from "next/image"; // Assuming you're using Next.js for image optimization

// const FooterSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 8,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 5000,
//     cssEase: "linear",
//   };

//   const images = [
//     image5,
//     image4,
//     image3,
//     image4,
//     image2,
//     image3,
//     image6,
//     image2,
//     image4,
//     image2,
//     image3,
//     image4,
//   ];
//   return (
//     <Box className="slider-container" border={"1px solid black"} mb={20}>
//       <Slider {...settings}>
//         {images.map((elem, i) => {
//           return (
//             <Flex width={300} height={200} key={i} px={2}>
//               <Image src={elem} alt="Slide 1" />
//             </Flex>
//           );
//         })}
//       </Slider>
//     </Box>
//   );
// };

// export default FooterSlider;

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

//   <Box
//     w={{ base: "90%", md: "19%" }}
//     maxW={"300px"} // Set a maximum width for responsiveness
//     h={"400px"}
//     key={i}
//     display={"flex"}
//     flexDir={"column"}
//     alignItems={"center"}
//     borderRadius={"10px"}
//     overflow={"hidden"} // Hide overflow for a cleaner look
//     transition={"box-shadow 0.3s ease"}
//     _hover={{
//       boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
//     }}
//     bgColor={"#fff"} // Use bgColor instead of backgroundColor for Chakra UI
//     boxShadow={"0 2px 4px rgba(0, 0, 0, 0.1)"}
//     p={4} // Padding for the entire card
//   >
//     <Image
//       src={product.img}
//       alt={product.title}
//       width={150}
//       height={150}
//       objectFit={"cover"} // Maintain aspect ratio and cover the container
//       borderRadius={"50%"} // Make the image circular
//     />
//     <Box
//       mt={4} // Margin top for text container
//       textAlign={"center"}
//     >
//       <Text
//         textTransform={"uppercase"}
//         fontSize={"lg"} // Set a font size for the title
//         fontWeight={"bold"} // Make the title bold
//         textColor={"#C75D68"}
//       >
//         {product.title}
//       </Text>
//       <Text textTransform={"uppercase"} fontSize={"sm"}>
//         {product.desc}
//       </Text>
//       <Text
//         fontSize={"lg"}
//         fontWeight={"bold"}
//         mt={2}
//         textColor={"#333"}
//       >
//         ${product.price}
//       </Text>
//     </Box>
//   </Box>
// -------------------
