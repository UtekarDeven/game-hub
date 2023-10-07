import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/log.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="30px"></Image>
      <Text>Navbar</Text>
    </HStack>
  );
};

export default NavBar;
