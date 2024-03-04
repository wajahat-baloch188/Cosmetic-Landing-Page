"use client";
import React from "react";
// Import necessary components and icons from Chakra UI
import { Dancing_Script } from "next/font/google";
import { FaShoppingBag } from "react-icons/fa";

const DancingScript = Dancing_Script({
  subsets: ["latin"],
  fontWeight: "900", // Change number for desired thickness
});

import {
  Box,
  Flex,
  Center,
  Text,
  Link,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  List,
  ListItem,
  useColorModeValue,
  Image,
  Button,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ShoppingCartIcon,
  SearchIcon,
} from "@chakra-ui/icons";

import logo from "../../public/images/header-img/Ethereal Elegance.png";
import cartBag from "../../public/images/header-img/bag-2.png";

// Navigation links
const links = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT US" },
  { href: "/shop", label: "SHOP" },
  { href: "/contact-us", label: "CONTACT US" },
  { href: "/blogs", label: "BLOGS" },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <Box px={{ base: 0, md: 10 }} bg={"white"}>
      {/* Main Navbar */}
      <Box as="nav" bg={"white"} px={4} py={2}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Center>
            <Link href="/">
              <Text
                className={DancingScript.className}
                style={{ fontSize: "20px" }}
              >
                Ethereal Elegance
              </Text>
            </Link>
          </Center>

          {/* Desktop Navigation */}
          <Flex
            display={{ base: "none", md: "flex" }}
            gap={{ base: "none", md: "30px" }}
            alignItems="center"
          >
            {links.map((link) => (
              <Link key={link.href} href={link.href} mr={4} fontSize={"15px"}>
                {link.label}
              </Link>
            ))}
            {/* Keep the Login button outside the mobile menu */}
          </Flex>

          {/* Cart and Search Icons */}
          <Flex
            alignItems="center"
            display={{ base: "flex", md: "flex" }}
            gap={{ base: 2, md: 1 }}
          >
            <Button bg={"transparent"}>Login</Button>
            <IconButton
              icon={<SearchIcon />}
              aria-label="Search"
              bg={"transparent"}
              mr={2}
            />
            <FaShoppingBag />

            {/* Mobile Navigation Button */}
            <IconButton
              icon={<HamburgerIcon />}
              aria-label="Open Menu"
              display={{ md: "none" }}
              onClick={onOpen}
              bg={"transparent"}
            />
          </Flex>
        </Flex>
      </Box>

      {/* Mobile Navigation Drawer */}
      <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="sm">
        <DrawerOverlay />
        <DrawerContent bg={"white"} border={"1px solid black"}>
          <DrawerHeader borderBottomWidth="1px">
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold">Your Logo</Text>
              <IconButton
                icon={<CloseIcon />}
                aria-label="Close Menu"
                onClick={onClose}
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <List spacing={4}>
              {links.map((link) => (
                <ListItem key={link.href}>
                  <Link href={link.href} onClick={onClose}>
                    {link.label}
                  </Link>
                </ListItem>
              ))}
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
