import AboutHeroSec from "@/Components/AboutHeroSec";
import {Box,Text,ListItem,OrderedList,Flex,Button,Input} from '@chakra-ui/react'
import React from "react";
import { Dancing_Script } from "next/font/google";
import {Image} from "next/image"
import mainImg from '../../../public/images/innerbanner/mainImg.png'
import texture3 from "../../../public/images/home-img/texture-3.png";
const DancingScript = Dancing_Script({
  subsets: ["latin"],
  fontWeight: "900",
});

const Blogs = () => {
  return <div>
      <AboutHeroSec heading={'Our Blogs'} text={'True Natural - True Organic'} />
      <Box
        display={'flex'}
        flexDirection={{base:"column",md:"row"}}
        p={'6'}
      >
        <Box
          w={{base:'100%',md:"75%"}}
          display={'flex'}
          flexDirection={'column'}
          p={'20'}
          gap={'8'}
          h={'full'}
        >

            {/* text section */}

            <Box w={'full'} >
            <Box 
              display={"flex"}
              flexDirection={'column'}
              alignItems={'start'}
              justifyContent={'start'}
              gap={'2'}
              p={'5px'}
            >
                <Text
                  className={DancingScript.className}
                  fontSize={{ base: "10px", md: "20px" }}
                  w={'full'}
                  textAlign={'start'}
                  color={"gray"}
                >
                  Experience Diversity
                </Text>
                <Text
                  fontStyle={'italic'}
                  fontSize={{ base: "8px", md: "15px" }}
                >
                  Explore five makeup trends this season for a fresh and adventurous beauty look.
                </Text>
                <Box
                  p={{base:"2",md:"5"}}
                  borderLeft={'2px'}
                  borderColor={'red'}

                  >
                  <Text
                      fontWeight={'bold'}
                      fontSize={{base:"x-small",md:"small"}}
                    >Effortless Beauty: Minimalist Makeup Techniques
                  </Text>

                </Box>
                <Text
                    fontSize={{base:"x-small",md:"small"}}
                    >Discover the latest makeup trends of the season and elevate your beauty routine with bold experimentation. From graphic eyeliner to dewy skin, explore diverse styles that reflect your unique personality. Embrace vibrant hues, statement lips, and feathered brows to express your creativity and stay ahead of the curve in the world of beauty.
                </Text>
                <Text
                  className={DancingScript.className}
                  fontSize={{ base: "10px", md: "40px" }}
                  w={'full'}
                  textAlign={'start'}
                  fontWeight={'bold'}
                  color={"pink"}
                >
                  Elevate your beauty routine with <br/> these trendy looks!
                </Text>
            </Box>
            </Box>

            {/* main-image section */}

            <Box
              h={'60vh'}
              w={'full'}
              bg={'gray'}
            >
                {/* <Image src={mainImg}  /> */}
            </Box>

            {/* step-section */}

            <Box
              display={'flex'}
              flexDirection={'column'}
              gap={'8'}
            >
              <Text
              fontSize={'2xl'}
              fontWeight={'bold'}
              >
                  Title: Five Must-Try Makeup Trends This Season
              </Text>
              <Text>
                    As the seasons change, so do makeup trends. Here are five trends to experiment with:
              </Text>
              <OrderedList spacing={'4'}   >
                <ListItem>
                         Monochromatic Makeup: Use matching shades for eyes, cheeks, and lips.
                </ListItem>
                <ListItem>
                         Graphic Eyeliner: Try bold, artistic eyeliner designs.
                </ListItem>
                <ListItem>
                         Dewy Skin: Achieve a radiant glow with hydrating products.
                </ListItem>
                <ListItem>
                         Statement Lips: Opt for bold lip colors for impact.
                </ListItem>
                <ListItem>
                         Feathered Brows: Embrace soft, natural-looking brows.
                </ListItem>
                
              </OrderedList>
            </Box>

            {/* recent blogs section */}

            <Box
              display={'flex'}
              p={'5'}
              flexDirection={'column'}
              gap={'8'}
            >
              
              <Text
                fontWeight={'semi-bold'}
                fontSize={'4xl'}
                fontStyle={'italic'}
              >
                Recent Blogs
              </Text>
              
              <Box>

              </Box>

            </Box>

        </Box>
        <Box
          w={{base:"100%",md:'25%'}}
          h={'full'}
        >
          <Box
            h={'6vh'}
            shadow={'md'}
            display={'flex'}
          >
            <Input h={'full'} />
            <Button
              h={'full'}
              color={'gray'}
            >
              search
            </Button>
          </Box>
          
        </Box>
      </Box>
      <Flex height={{ base: "20vh", md: "30vh" }} w={"100%"} bg={"#F8F8F8"}>
      <Box h={"100%"} w={"30%"} pos={"relative"}>
        <Box pos={"absolute"} bottom={{ base: 0, md: -7 }}>
          <Text
            className={DancingScript.className}
            fontSize={{ base: "10vw", md: "10vw" }}
            color={"#C75D68"}
          >
            Beauty
          </Text>
        </Box>
      </Box>
      <Box
        h={"100%"}
        w={"50%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        gap={4}
      >
        <Text fontSize={{ base: 12, md: "auto" }} textAlign={"center"}>
          Dwell on the beauty of life. Watch the stars, and see yourself running
          with them.
        </Text>
        <Text fontSize={{ base: 10, md: "auto" }}>
          ― Marcus Aurelius, Meditations
        </Text>
        <Button
          border={"2px solid black"}
          bg={"transparent"}
          borderRadius={0}
          fontSize={{ base: 7, md: 10 }}
        >
          EXPLORE MORE
        </Button>
      </Box>
      <Box h={"100%"} w={"20%"} pos={"relative"}>
        <Box pos={"absolute"} bottom={0}>
          {/* <Image src={texture3} /> */}
        </Box>
      </Box>
      </Flex>

  </div>;
};

export default Blogs;


