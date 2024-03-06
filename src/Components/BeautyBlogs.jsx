"use client";
import { Box, Button, Card, Text } from "@chakra-ui/react";
import { Dancing_Script } from "next/font/google";

import blogImg from "../../public/images/home-img/blogImg1.png";

const DancingScript = Dancing_Script({
  subsets: ["latin"],
  fontWeight: "900",
});

import Image from "next/image";
const BeautyBlogs = () => {
  return (
    <>
      <Box my={5} h={"auto"} w={"100%"} zIndex={2}>
        <Box h={{ base: "auto", md: "80%" }}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
          >
            <Text
              className={DancingScript.className}
              fontSize={{ base: "8vw", md: "4vw" }}
              color={"#BFBFBF"}
            >
              Beauty Blog
            </Text>
            <Text fontStyle={"italic"} color={"#252525"}>
              We Love to share our Story & Experience
            </Text>
          </Box>
          <Box height={"auto"} width={"85%"} margin={"0 auto"}>
            <Box
              display={"flex"}
              justifyContent={"space-around"}
              mt={10}
              flexWrap={"wrap"}
              gap={5}
            >
              <Card
                border={"1px solid black"}
                borderRadius={0}
                w={{ base: "80%", md: "20%" }}
                h={"360px"}
                p={1}
              >
                <Image src={blogImg} />

                <Box>
                  <Text textAlign={"center"} color={"#C75D68"}>
                    November 2024
                  </Text>
                  <Text textAlign={"center"} py={2}>
                    Five Makeup Trends to Experiment with This Season.
                  </Text>
                  <Text
                    textDecor={"underline"}
                    textAlign={"center"}
                    color={"#7A7A7A"}
                  >
                    Read More
                  </Text>
                </Box>
              </Card>
              <Card
                border={"1px solid black"}
                borderRadius={0}
                w={{ base: "80%", md: "20%" }}
                h={"360px"}
                p={1}
              >
                <Image src={blogImg} />

                <Box>
                  <Text textAlign={"center"} color={"#C75D68"}>
                    November 2024
                  </Text>
                  <Text textAlign={"center"} py={2}>
                    Five Makeup Trends to Experiment with This Season.
                  </Text>
                  <Text
                    textDecor={"underline"}
                    textAlign={"center"}
                    color={"#7A7A7A"}
                  >
                    Read More
                  </Text>
                </Box>
              </Card>
              <Card
                border={"1px solid black"}
                borderRadius={0}
                w={{ base: "80%", md: "20%" }}
                h={"360px"}
                p={1}
              >
                <Image src={blogImg} />

                <Box>
                  <Text textAlign={"center"} color={"#C75D68"}>
                    November 2024
                  </Text>
                  <Text textAlign={"center"} py={2}>
                    Five Makeup Trends to Experiment with This Season.
                  </Text>
                  <Text
                    textDecor={"underline"}
                    textAlign={"center"}
                    color={"#7A7A7A"}
                  >
                    Read More
                  </Text>
                </Box>
              </Card>
            </Box>
          </Box>

          <Box
            w={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            my={4}
          >
            <Button
              border={"2px solid black"}
              bg={"transparent"}
              borderRadius={0}
              fontSize={{ base: 7, md: 10 }}
            >
              EXPLORE MORE
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BeautyBlogs;
