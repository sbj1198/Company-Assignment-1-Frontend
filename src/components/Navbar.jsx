import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <Flex
      justifyContent="flex-end"
      alignItems="center"
      boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
      p="12px 20px 12px 0"
    >
      <Link as={RouteLink} to="/" _hover={{ textDecoration: "none" }}>
        <Box
          mr="20px"
          backgroundColor="#9F7AEA"
          color="white"
          fontWeight="semibold"
          _hover={{ bgColor: "#6B46C1", cursor: "pointer" }}
          p="8px 30px 8px 30px"
          borderRadius="50px"
        >
          Home
        </Box>
      </Link>
      <Link as={RouteLink} to="/users" _hover={{ textDecoration: "none" }}>
        <Box
          mr="20px"
          backgroundColor="#9F7AEA"
          color="white"
          fontWeight="semibold"
          _hover={{ bgColor: "#6B46C1", cursor: "pointer" }}
          p="8px 30px 8px 30px"
          borderRadius="50px"
        >
          Users
        </Box>
      </Link>

      <Link as={RouteLink} to="/posts" _hover={{ textDecoration: "none" }}>
        <Box
          p="8px 30px 8px 30px"
          backgroundColor="#9F7AEA"
          color="white"
          fontWeight="semibold"
          _hover={{ bgColor: "#6B46C1", cursor: "pointer" }}
          borderRadius="50px"
        >
          Posts
        </Box>
      </Link>
    </Flex>
  );
};
