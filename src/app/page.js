"use client";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

import styles from "../myStyles.module.css";

import HeroSection from "@/Components/HeroSection";
import Rectangle1Img from "../../public/images/home-img/Rectangle1.png";
import lipstick from "../../public/images/home-img/lipstick.png";
import Eyeliner from "../../public/images/home-img/eyelinear.png";
import liplose from "../../public/images/home-img/liplose.png";
import nailPolish from "../../public/images/home-img/nailpolish.png";
import aboutImg from "../../public/images/home-img/about-img.png";
import aboutwing from "../../public/images/home-img/aboutwing.png";
import clinque from "../../public/images/home-img/clinque.png";
import card2 from "../../public/images/products-img/card2.png";
import card4 from "../../public/images/products-img/Card4.png";
import card5 from "../../public/images/products-img/card5.png";
import partten8 from "../../public/images/home-img/partten-8.png";
import white_syrup from "../../public/images/home-img/whitening_syrup.png";
import Image from "next/image";
import LogosSection from "@/Components/LogosSection";

import jeweImg from "../../public/images/home-img/Jewe2.png";
import Testimonials from "@/Components/Testimonials";
import BeautyBlogs from "@/Components/BeautyBlogs";
import BestProduct from "@/Components/BestProduct";

import ExploreMore from "@/Components/ExploreMore";

const cardsData = [
  {
    text1: "Must Have",
    text2: "Makeup Set",
    img: Rectangle1Img,
  },
  {
    text1: "Nature",
    text2: "Foundation",
    img: card2,
  },
  {
    text1: "Must Have",
    text2: "Body Cleaner",
    img: card4,
  },
  {
    text1: "Must Have",
    text2: "Perfumes",
    img: card5,
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
        height={{ base: "auto", md: "30vh" }}
        width="100%"
        gap={3}
        flexWrap={{ base: "wrap", md: "nowrap" }}
        py={5}
        px={{ base: 8, md: 10 }}
        justifyContent="space-around"
        alignItems="center"
      >
        {cardsData.map((data, i) => {
          return (
            <Box
              key={data.id}
              pos={"relative"}
              h={{ base: "125px", md: "160px", lg: "170px", "2xl": "190px" }}
              w={{
                base: "100%",
                sm: "40%",
                md: "43%",
                lg: "32%",
                "2xl": "21.5%",
              }}
              boxShadow={"md"}
              display="flex"
              flexWrap="wrap"
              justifyContent="center" // Center the box horizontally and vertically
              alignItems="center"
              zIndex={99}
            >
              <Image
                src={data.img}
                objectFit="cover"
                alt="img"
                style={{ height: "100%", width: "100%" }}
              />

              <Box
                h={"100%"}
                w={"100%"}
                pos={"absolute"}
                top={0}
                left={0}
                display={"flex"} // Wrap content if needed
                flexWrap="wrap" // Allow content to wrap on smaller screens
                justifyContent={"center"} // Align text content to the right (optional)
                alignItems={"center"} // Align text content to the bottom (optional)
                flexDir={"column"} // Stack text content vertically
                zIndex={1} // Ensure text overlays the image
                p={0} // Remove padding for better border box placement
              >
                <Box
                  border={"1px solid black"} // Black border box
                  w={"95%"} // Adjust width as needed
                  h={"90%"} // Adjust height as needed
                  display={"flex"}
                  flexDir={"column"}
                  justifyContent={"end"}
                  alignItems={"end"}
                  p={2}
                >
                  {/* Text content with original positioning */}
                  <Text
                    fontSize={{ base: "md", md: "lg", lg: "xl" }}
                    textColor="#DBAFAF"
                    className={styles.heading}
                    fontWeight={"900"}
                    pr={4}
                    textAlign={"center"} // Center text horizontally
                  >
                    {data.text1}
                  </Text>
                  <Text
                    fontSize={{ base: "sm", md: "14px", lg: "md" }}
                    textColor="#383838"
                    fontFamily="Poppins"
                    fontWeight={"light"}
                    bg={"white"} // White background for better readability
                    px={2} // Padding for text content
                  >
                    {data.text2}
                  </Text>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Flex>

      {/* Shop========== */}
      <Box minH={"100vh"} w={"100%"}>
        <Flex w={"100%"} h={"25%"} flexDir={"column"} alignItems={"center"}>
          <Text
            className={styles.heading}
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
            Froms Editors Pick Collection
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
              w={{ base: "90%", sm: "45%", md: "30%", lg: "19%" }}
              key={i}
              display={"flex"}
              justifyContent={"center"}
              flexDir={"column"}
              alignItems={"center"}
              style={{
                boxShadow: `0 2px 4px rgba(0, 0, 0, 0.1)`, // Default shadow
                transition: "box-shadow 0.3s ease",
                ":hover": {
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <Image src={product.img} alt="Product" />
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
      <Box>
        <LogosSection />
      </Box>

      {/* About us */}
      <Box
        height={{ base: "auto", md: "75vh", lg: "100vh" }}
        width="100%"
        display="flex"
        flexWrap="wrap"
      >
        {/* Box-1 */}
        <Box
          height={{ base: "70vh", md: "88vh", lg: "100vh" }}
          width={{ base: "100%", md: "50%" }}
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Box
            height={{ base: "44vh", md: "24vh", lg: "47vh" }}
            width={{ base: "80%", md: "60%", lg: "50%" }}
            border={"1px solid black"}
            pos={"absolute"}
            zIndex={-1}
          >
            <Box
              width={{ base: "120px", md: "160px", lg: "270px" }}
              pos={"absolute"}
              left={{ base: "-20px", md: "-45px", lg: "-90px" }}
              top={{ base: -10, md: "-40px", lg: "-90px" }}
              zIndex={99}
            >
              <Image src={aboutwing} />
            </Box>
          </Box>
          <Box
            height={{ base: "44vh", md: "24vh", lg: "47vh" }}
            width={{ base: "80%", md: "60%", lg: "50%" }}
            pos={"absolute"}
            top={{ base: "22%", md: "37%", lg: "28%" }}
            left={{ base: "13%", md: "22%", lg: "26%" }}
            zIndex={-9}
          >
            <Image src={aboutImg} style={{ height: "100%" }} />
          </Box>

          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <Button
              zIndex={5}
              borderRadius={0}
              fontSize={{ base: "2vw", md: "1.5vw" }}
              py={{ base: 2, md: 3 }}
              px={{ base: 3, md: 5 }}
            >
              Fancy Look
            </Button>
          </Box>
        </Box>

        {/* Box 2 */}
        <Box
          height={{ base: "72vh", md: "92vh", lg: "100vh" }}
          width={{ base: "100%", md: "50%" }}
          display={"flex"}
          flexDir={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          py={{ base: 1, md: 3 }}
          px={{ base: 2, md: 0 }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            pr={{ base: 2, md: 6, lg: 40 }}
            pl={{ base: 2, md: 0 }}
          >
            <Text
              fontSize={"32px"}
              color={"#BFBFBF"}
              className={styles.heading}
              placeSelf={"start"}
            >
              About us
            </Text>
            <Text
              fontFamily={"Times New Roman"}
              fontStyle={"italic"}
              fontSize={{ base: "32px", md: "28px", lg: "34px" }}
            >
              We Guaranted a High Quality
            </Text>
            <Box borderLeft={"2px solid #C75D68"} pl={4} my={3} mb={3}>
              <Text
                fontFamily={"Poppins"}
                color={"#303030"}
                fontSize={{ base: "10px", md: "12px", lg: "14px" }}
              >
                At EtherealElegance, we believe in the transformative power of
                beauty. Our curated cosmetics collection is meticulously crafted
                to inspire confidence and elevate your natural allure.
              </Text>
            </Box>

            <Box>
              <Text
                fontFamily={"Poppins"}
                color={"#7A7A7A"}
                lineHeight={6}
                fontSize={"12px"}
              >
                We understand that beauty is more than just skin deep; its about
                embracing your individuality and expressing your personal style
                with effortless elegance. Thats why we offer premium offerings
                that cater to modern sophistication, ensuring you feel empowered
                and beautiful in every moment.
              </Text>
            </Box>

            <Box display={"flex"} gap={20} py={5}>
              <Box
                display={"flex"}
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text
                  color={"#C75D68"}
                  fontSize={"40px"}
                  fontStyle={"italic"}
                  fontFamily={"Times New Roman"}
                >
                  500k
                </Text>
                <Text
                  fontFamily={"Poppins"}
                  color={"#292929"}
                  fontSize={"12px"}
                >
                  Cosmetics Sold
                </Text>
              </Box>
              <Box
                display={"flex"}
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text
                  color={"#C75D68"}
                  fontSize={"40px"}
                  fontStyle={"italic"}
                  fontFamily={"Times New Roman"}
                >
                  10+
                </Text>
                <Text
                  fontFamily={"Poppins"}
                  color={"#292929"}
                  fontSize={"12px"}
                >
                  Years Experience
                </Text>
              </Box>
            </Box>

            <Box mt={4}>
              <Button
                border={"1px solid black"}
                borderRadius={"none"}
                bgColor={"white"}
                fontFamily={"Poppins"}
                fontSize={"14px"}
                fontWeight={600}
                letterSpacing={1}
                p={{ base: 4, md: 7 }}
              >
                EXPLORE MORE
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Holiday Sets */}
      <Box
        mt={{ base: 10, md: 0 }}
        h={"95vh"}
        w={"100vw"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex
          h={{ base: "60vh", md: "67vh" }}
          w={"100vw"}
          bg={"#F5F5F5"}
          flexWrap={"wrap"}
          mt={{ base: -150, md: 0 }}
        >
          <Box
            h={{ base: "40%", md: "100%" }}
            w={{ base: "100%", md: "65%" }}
            pl={{ base: 2, md: 20 }}
            pr={{ base: 2, md: 0 }}
          >
            <Box
              h={{ base: "15%", md: "25%" }}
              w={"100%"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box mt={4}>
                <Image
                  src={jeweImg}
                  alt="img"
                  style={{ height: "34px", width: "34px" }}
                />
              </Box>
              <Box mt={10}>
                <Image
                  src={jeweImg}
                  alt="img"
                  style={{ height: "20px", width: "20px" }}
                />
              </Box>
            </Box>
            <Box h={"45%"} w={"100%"}>
              <Text
                className={styles.heading}
                textColor={"#C75D68"}
                fontSize={"32px"}
              >
                Holiday Sets
              </Text>
              <Text
                fontFamily={"Times New Roman"}
                fontStyle={"italic"}
                fontWeight={"bold"}
                fontSize={"40px"}
                mt={-4}
              >
                You will love it!
              </Text>
              <Box py={5}>
                <Text
                  color={"#252525"}
                  fontFamily={"Poppins"}
                  fontSize={"12px"}
                >
                  Unleash the power of radiant skin with our potent formula
                  enriched with nourishing ingredients. Say goodbye to dullness
                  and hello to a luminous glow. Dont miss out, shop now and
                  reveal your best skin yet!
                </Text>
              </Box>
            </Box>
            <Box
              h={{ base: "15%", md: "30%" }}
              w={{ base: "70%", md: "50%" }}
              display={"flex"}
              justifyContent={"space-between"}
              mt={{ base: "7%", md: "0" }}
            >
              <Box>
                <Button
                  bg={"transparent"}
                  border={"2px solid black"}
                  borderRadius={0}
                  mt={{ base: "85%", md: "-15" }}
                >
                  READ MORE
                </Button>
              </Box>
              <Box mt={{ base: "35%", md: 5 }}>
                <Image
                  src={jeweImg}
                  alt="img"
                  style={{ height: "20px", width: "20px" }}
                />
              </Box>
            </Box>
          </Box>

          <Box
            h={{ base: "40vh", md: "70vh", lg: "90vh", xl: "100vh" }}
            mt={{ base: "20%", md: "-5%" }}
            w={{ base: "100%", md: "35%" }}
            ml={{ base: "30%", md: 0 }}
          >
            <Image
              src={clinque}
              style={{ height: "90%", width: "100%" }}
              alt="img"
            />
          </Box>
        </Flex>
      </Box>

      {/* Color */}
      <BestProduct />

      {/* Best Product */}
      <Flex h={{ base: "100vh", md: "80vh" }} w={"100%"} flexWrap={"wrap"}>
        <Box
          h={{ base: "40vh", md: "80vh" }}
          w={{ base: "100%", md: "50%" }}
          display={"flex"}
          flexDir={"row"}
        >
          <Box
            h={"100%"}
            w={{ base: "30%", md: "35%" }}
            ml={{ base: "-5", md: "-5" }}
          >
            <Image src={partten8} alt="img" />
          </Box>
          <Box
            h={"100%"}
            w={{ base: "70%", md: "65%" }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image src={white_syrup} alt="syrup" />
          </Box>
        </Box>

        {/* Box 2 */}
        <Box
          h={{ base: "50vh", md: "80vh" }}
          w={{ base: "100%", md: "50%" }}
          position="relative"
        >
          {/* Serum Text (Background) */}
          <Text
            fontSize={{ base: "30vw", md: "13vw" }}
            className={styles.heading}
            position="absolute"
            top="50%"
            left={{ base: "55%", md: "60%" }}
            transform="translate(-50%, -50%)"
            color="#C75D68"
            zIndex="-1"
            opacity={0.6}
          >
            Serum.
          </Text>

          {/* Centered Text */}
          <Box
            h="100%"
            display="flex"
            justifyContent="center"
            flexDir="column"
            px={{ base: 3, md: 20 }}
            zIndex="9"
          >
            <Text
              fontSize={{ base: "32px", md: "32px" }}
              color="#BFBFBF"
              className={styles.heading}
            >
              Best Product
            </Text>
            <Text
              fontFamily="Times New Roman"
              fontStyle="italic"
              fontSize={{ base: "35px", md: "44px" }}
              mt={{ base: -3, md: -13 }}
            >
              Whitening Serum.
            </Text>
            <Text
              my={{ base: 3, md: 6 }}
              fontFamily="Poppins"
              color="#252525"
              fontWeight={600}
              textTransform="uppercase"
            >
              Introducing the Whitening Serum, a breakthrough in skincare
            </Text>

            <Box borderLeft="2px solid #C75D68">
              <Text pl={4} fontFamily="Poppins" color="#7A7A7A">
                Formulated with advanced ingredients, it targets dark spots and
                uneven skin tone, unveiling a brighter, more radiant complexion.
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>

      {/* Explore More */}
      <ExploreMore />

      {/* Beauty Blog */}
      <BeautyBlogs />

      {/*  */}
      <Testimonials />
    </Box>
  );
}
