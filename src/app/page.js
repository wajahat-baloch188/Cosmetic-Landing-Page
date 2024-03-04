import { Box } from "@chakra-ui/react";

import HeroSection from "@/Components/HeroSection";
export default function Home() {
  return (
    <Box h={"100%"}>
      <Box>
        <HeroSection />
      </Box>

      {/* Cards */}
      <Box height={"70vh"} width={"100%"} bg={"red"}></Box>
    </Box>
  );
}
