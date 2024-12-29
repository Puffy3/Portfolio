import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  color,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === 'success') formik.resetForm();
    }
  }, [response, onOpen]);
  const formik = useFormik({
    initialValues: {
      firstName:"",
      email: "",
      type:"hireMe",
      comment:""
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch("https://formspree.io/f/movvlayb", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          onOpen("success", "Your message has been sent!");
          resetForm();
        } else {
          onOpen("error", "Something went wrong. Please try again.");
        }
      } catch (error) {
        onOpen("error", "Network error. Please try again.");
      }
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Enter a valid email").required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string().required("Required")
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                  id="firstName"
                  name="firstName"
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                  id="email"
                  name="email"
                  type="email"
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select  value={formik.values.type}
                onChange={formik.handleChange} id="type" name="type">
                  <option style={{color:'black'}} value="hireMe">Freelance project proposal</option>
                  <option style={{color:'black'}} value="openSource">
                    Open source consultancy session
                  </option>
                  <option style={{color:'black'}} value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                value={formik.values.comment}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                  id="comment"
                  name="comment"
                  height={250}
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
             
              <Button type="submit" colorScheme="purple" width="full">
              {isLoading?"Loading...":"Submit"}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
