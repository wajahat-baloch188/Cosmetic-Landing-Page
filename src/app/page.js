"use client";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

import HeroSection from "@/Components/HeroSection";
import Rectangle1Img from "../../public/images/home-img/Rectangle1.png";
import lipstick from "../../public/images/home-img/lipstick.png";
import Eyeliner from "../../public/images/home-img/eyelinear.png";
import liplose from "../../public/images/home-img/liplose.png";
import nailPolish from "../../public/images/home-img/nailpolish.png";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import logo1 from "../../public/images/home-img/Logo1.png";
import logo2 from "../../public/images/home-img/Logo2.png";
import logo3 from "../../public/images/home-img/Logo3.png";
import logo4 from "../../public/images/home-img/Logo4.png";
import logo5 from "../../public/images/home-img/logo5.png";

const DancingScript = Dancing_Script({
  subsets: ["latin"],
  fontWeight: "900",
});

const cardsData = [
  {
    text1: "Must Have",
    text2: "Makeup Set",
    // img:
  },
  {
    text1: "Nature",
    text2: "Foundation",
    // img:
  },
  {
    text1: "Must Have",
    text2: "Body Cleaner",
    // img:
  },
  {
    text1: "Must Have",
    text2: "Perfumes",
    // img:
  },
];

const products = [
  {
    img: lipstick,
    title: "Lipstick",
    desc: "Flat-Lay Pink Lipstick",
    price: 16.0,
  },
  {
    img: Eyeliner,
    title: "Eyeliner",
    desc: "Black Eyeliner",
    price: 20.0,
  },
  {
    img: liplose,
    title: "Liplose",
    desc: "Pink Liplose",
    price: 30.0,
  },
  {
    img: nailPolish,
    title: "Nail Polish",
    desc: "Red Nail Polish",
    price: 30.0,
  },
];
export default function Home() {
  return (
    <Box h={"100%"}>
      <Box>
        <HeroSection />
      </Box>

      {/* Cards */}
      <Flex
        height={"auto"}
        width={"100%"}
        gap={2}
        flexWrap={{ base: "wrap", md: "no-wrap" }}
        p={5}
        justifyContent={"space-between"}
      >
        {cardsData.map((data, index) => (
          <Box
            key={index}
            height="20vh"
            width={{ base: "100%", md: "24%" }}
            position="relative"
            my={2}
          >
            {/* Text on top of the image */}
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Text
                alignItems="center"
                mr={5}
                className={DancingScript.className}
                fontSize={{ base: "10vw", md: "2.8vw" }}
                mb={{ base: 0, md: -2 }}
                textColor={"#DBAFAF"}
              >
                {data.text1}
              </Text>
              <Text
                bg="red"
                mr={2}
                textColor="#383838"
                fontFamily={"Poppins"}
                letterSpacing={2}
                fontSize={"16px"}
                padding={2}
                textTransform={"uppercase"}
                backgroundColor={"white"}
                mb={{ base: 5, md: 0 }}
              >
                {data.text2}
              </Text>
            </Box>

            {/* Image at the back */}
            <Box>
              <Image src={Rectangle1Img} objectFit="cover" />
            </Box>
          </Box>
        ))}
      </Flex>

      {/* Shop========== */}
      <Box border={"1px solid green"} minH={"100vh"} w={"100%"}>
        <Flex w={"100%"} h={"25%"} flexDir={"column"} alignItems={"center"}>
          <Text
            className={DancingScript.className}
            fontSize={"32px"}
            color={"#BFBFBF"}
            mt={5}
          >
            Perfect for you
          </Text>
          <Text
            fontFamily={"Times New Roman"}
            fontStyle={"italic"}
            fontSize={"34px"}
            py={2}
            textAlign={"center"}
          >
            Froms Editor's Pick Collection
          </Text>
          <Box
            w={{ base: "30%", md: "10%" }}
            border={"1px solid #BFBFBF"}
            mb={{ base: 5, md: 10 }}
          ></Box>
        </Flex>

        <Flex
          width={"100%"}
          flexWrap={"wrap"}
          justifyContent={"space-around"}
          gap={{ base: 5, md: 0 }}
        >
          {products.map((product, i) => (
            <Box
              w={{ base: "90%", md: "19%" }}
              key={i}
              display={"flex"}
              justifyContent={"center"}
              flexDir={"column"}
              alignItems={"center"}
              style={{
                boxShadow: `0 2px 4px rgba(0, 0, 0, 0.1)`, // Default shadow
                transition: "box-shadow 0.3s ease",
                ":hover": {
                  // Apply styles on hover using pseudo-class
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                },
              }}
              onMouseOver={() => {
                /* Handle additional hover actions if needed */
              }}
              onMouseOut={() => {
                /* Handle additional mouseout actions if needed */
              }}
            >
              <Image src={product.img} alt="Green" />
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDir={"column"}
                py={2}
              >
                <Text textTransform={"uppercase"} textColor={"#C75D68"}>
                  {product.title}
                </Text>
                <Text textTransform={"uppercase"}>{product.desc}</Text>
                <Text>${product.price}</Text>
              </Box>
            </Box>
          ))}
        </Flex>

        <Box
          w={"100%"}
          // height={"30%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          py={50}
        >
          <Button
            bg={"transparent"}
            border={"2px solid black"}
            borderRadius={0}
            textColor={"black"}
            my={25}
          >
            SHOP NOW
          </Button>
        </Box>
      </Box>

      {/* Logos */}
      <Box
        h={"40vh"}
        w={"100%"}
        bg={"green"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Box h={"15vh"} w={"17%"} border={"1px solid red"}>
          <Image src={logo1} objectFit="cover" />
        </Box>
        <Box h={"15vh"} w={"17%"} border={"1px solid red"}>
          <Image src={logo2} objectFit="cover" />
        </Box>
        <Box h={"15vh"} w={"17%"} border={"1px solid red"}>
          <Image src={logo3} objectFit="cover" />
        </Box>
        <Box h={"15vh"} w={"17%"} border={"1px solid red"}>
          <Image src={logo4} objectFit="cover" />
        </Box>
        <Box h={"15vh"} w={"17%"} border={"1px solid red"}>
          <Image src={logo5} objectFit="cover" />
        </Box>
      </Box>
    </Box>
  );
}
