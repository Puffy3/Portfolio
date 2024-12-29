import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Prasun!";
const bio1 = "A Fullstack developer";
const bio2 = "specialised in MERN";
const imgsrc=require("../images/dp.jpg")

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
<VStack gap ="10">
  <VStack gap="0"><Avatar size="xl" name="Sage" src={imgsrc} />
  <Heading size="sm" color="white" >{greeting}</Heading></VStack>

<VStack gap="1">
  <Heading size="lg" color="white" >{bio1}</Heading>
  <Heading size="lg" color="white" >{bio2}</Heading>
</VStack>

</VStack>
  </FullScreenSection>
);

export default LandingSection;
