"use client";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";

import partten8 from "../../public/images/home-img/partten-8.png";
import surfacePinkImg from "../../public/images/home-img/surface-pink.png";
import styles from "../myStyles.module.css";
import Image from "next/image";
import HomeFootSlider from "./HomeFootSlider";
import message from "../../public/images/home-img/message.png";

const Testimonials = () => {
  return (
    <>
      <Box
        h={{ base: "auto", md: "100vh" }}
        width={"100%"}
        display={"flex"}
        flexDir={"column"}
      >
        {/* Box 1 */}
        <Flex width={"100%"} h={"30%"}>
          <Flex
            h={"100%"}
            w={"85%"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Text
              className={styles.heading}
              color={"#BFBFBF"}
              textAlign={"center"}
              fontSize={{ base: "6vw", md: "2vw" }}
            >
              Perfect Experience
            </Text>
            <Text
              color={"#252525"}
              fontSize={{ base: "6vw", md: "2vw" }}
              fontStyle={"italic"}
              textAlign={"center"}
            >
              Our Testimonials
            </Text>
          </Flex>
          <Box h={"100%"} w={"15%"}>
            <Image src={partten8} />
          </Box>
        </Flex>
        {/* Box 2 */}
        <Box width={"100%"} h={"20%"}>
          <Text
            className={styles.heading}
            color={"#C75D68"}
            fontSize={{ base: "18vw", md: "8vw" }}
            ml={{ base: -5, md: -8 }}
            opacity={0.8}
          >
            Testimonial
          </Text>
        </Box>
        {/* Box 3 */}
        <Box
          width="100%"
          height={{ base: "63vh", md: "500px" }}
          position="relative"
          overflow={"hidden"}
        >
          <Box w="100%" h="100%">
            <Image
              src={surfacePinkImg}
              objectFit="cover"
              style={{ height: "63vh", width: "100vw" }}
            />
          </Box>

          <HomeFootSlider />
        </Box>
      </Box>
    </>
  );
};

export default Testimonials;
