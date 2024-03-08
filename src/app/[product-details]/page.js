"use client";
import AboutHeroSec from "@/Components/AboutHeroSec";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import liplose from "../../../public/images/products-img/ligloss.png";
import img2 from "../../../public/images/home-img/blogGrid2.png";
import { React, useState } from "react";

const ProductDetails = () => {
  const initialLargeImage = "";
  const [largeImage, setLargeImage] = useState(initialLargeImage);

  const handleImageClick = (newLargeImage) => {
    setLargeImage(newLargeImage);
  };
  return (
    <Box h={"auto"} w={"100%"}>
      <AboutHeroSec heading={"Product"} text={"True Natural - True Organic"} />

      {/* Product details */}
      <Box
        h={{ base: "auto", md: "80vh" }}
        w={"100%"}
        display={"flex"}
        px={{ base: 5, md: 10 }}
        flexWrap={"wrap"}
      >
        {/* Box-1 */}
        <Box
          h={{ base: "80vh", md: "80vh" }}
          w={{ base: "100%", md: "50%" }}
          py={5}
        >
          <Box h={"auto"}>
            <Box h={"350px"} boxShadow={"md"} w={"285px"} m={"0 auto"}>
              {largeImage ? (
                <Image
                  src={largeImage}
                  objectFit="cover"
                  style={{ height: "100%", width: "100%" }}
                />
              ) : (
                <Image
                  src={liplose} // Initial small image
                  objectFit="cover"
                  style={{ height: "100%", width: "100%" }}
                  onClick={() => handleImageClick(liplose)} // Set click handler for large version
                />
              )}
            </Box>
          </Box>
          <Flex w={"287px"} gap={2} m={"0 auto"} flexWrap={"wrap"} mt={2}>
            <Box h={"100px"} w={"90px"} m={"0 auto"} boxShadow={"md"}>
              <Image
                src={img2}
                objectFit="cover"
                style={{ height: "100%", width: "100%" }}
                onClick={() => handleImageClick(img2)} // Set click handler for large version
              />
            </Box>
            {/* Similar click handlers for other thumbnail images */}
            <Box h={"100px"} w={"90px"} m={"0 auto"} boxShadow={"md"}>
              <Image
                src={liplose}
                objectFit="cover"
                style={{ height: "100%", width: "100%" }}
                onClick={() => handleImageClick(liplose)} // Set click handler for large version
              />
            </Box>
            <Box h={"100px"} w={"90px"} m={"0 auto"} boxShadow={"md"}>
              <Image
                src={img2}
                objectFit="cover"
                style={{ height: "100%", width: "100%" }}
                onClick={() => handleImageClick(img2)} // Set click handler for large version
              />
            </Box>
          </Flex>
        </Box>

        {/* Box-2 */}
        <Box
          h={{ base: "40vh", md: "80vh" }}
          w={{ base: "100%", md: "50%" }}
          border={"1px solid black"}
        ></Box>
      </Box>
    </Box>
  );
};

export default ProductDetails;
