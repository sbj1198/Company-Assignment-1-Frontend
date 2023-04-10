import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Box,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { api } from "../../API/api";

export const UserForm = () => {
  const [userDetails, setUserDetails] = useState({
    id: null,
    name: "",
    email: "",
    bio: "",
  });

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const formSubmitHandler = () => {
    axios
      .post(`${api}/users`, userDetails)
      .then((res) => {
        setUserDetails({
          id: "",
          name: "",
          email: "",
          bio: "",
        });
      })
      .catch((err) => {
        console.log("Error: ", err.response.data.errors[0].message);
      });
  };

  return (
    <Box
      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
      w="500px"
      p="20px 30px"
      mb="20px"
    >
      <FormControl isRequired>
        <FormLabel>Id</FormLabel>
        <Input
          name="id"
          type="Number"
          placeholder="Id"
          mb="10px"
          isRequired
          onChange={handleFormInput}
          value={userDetails.id}
        />
        <FormLabel>Name</FormLabel>
        <Input
          name="name"
          type="text"
          placeholder="Name"
          mb="10px"
          isRequired
          onChange={handleFormInput}
          value={userDetails.name}
        />
        <FormLabel>Email</FormLabel>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          mb="10px"
          isRequired
          onChange={handleFormInput}
          value={userDetails.email}
        />
        <FormLabel>Bio</FormLabel>
        <Textarea
          name="bio"
          placeholder="Bio"
          mb="20px"
          onChange={handleFormInput}
          value={userDetails.bio}
        />
        <Button
          onClick={formSubmitHandler}
          bgColor="#805AD5"
          w="100%"
          color="white"
          _hover={{ bgColor: "#6B46C1", cursor: "pointer" }}
        >
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};
