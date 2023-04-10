import { Box, Flex, Heading } from "@chakra-ui/react";
import { UserForm } from "../components/UserForm";

export const Home = () => {
  return (
    <Flex w="100%" border="1px solid red" bgColor="#EDF2F7">
      <Box p="20px 30px" bgColor="white">
        <Box mb="10px">
          <Heading textAlign="center">User Form</Heading>
        </Box>
        <UserForm />
      </Box>
      <Box></Box>
    </Flex>
  );
};
