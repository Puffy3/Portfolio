import { Heading, HStack, Image, Text, VStack,Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc,link}) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
   
      
    <VStack   bg="white" borderRadius="md">
      <Image src={imageSrc}  borderRadius="md"/>
      <Heading  color="black" textAlign="left" fontsize="sm">{title}</Heading> 
      
      
       
      <Text color="gray" textAlign="left" fontSize='sm'>{description}</Text>
      <HStack> 
       <a href={link} style={{color:"black"}}>Github</a>
       </HStack>
    
     
      
    </VStack>
   
  );
  
};

export default Card;
