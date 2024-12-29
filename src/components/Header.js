
import React, { useEffect, useRef,useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";


const socials = [
  { 
    index:1,
    icon: faEnvelope,
    url: "mailto:Prasun.0489@gmail.com",
  },
  { index:2,
    icon: faGithub,
    url: "https://github.com/Puffy3",
  },
  {
    index:3,
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/prasun-kumar-jha-090282257",
  }

];

const Header = () => {
  const handleClick = (anchor) => () => {
    console.log(anchor)
    const id = `${anchor}-section`;
    console.log(id)
    const element = document.getElementById(id);
    console.log(element)
    if (element) {
      console.log(`${element} inside function`)
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const headerRef = useRef(null);
  const [transform, setTransform] = useState('translateY(0)');
  let lastScrollY = 0;
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      
      if (currentScrollY > lastScrollY) {
       
        setTransform('translateY(-200px)');
      } else {
       
        setTransform('translateY(0)');
      }

      
      lastScrollY = currentScrollY;
    };

    
    window.addEventListener('scroll', handleScroll);

   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <Box
    ref={headerRef}
    position="fixed"
    top={0}
    left={0}
    right={0}
    transform={transform}
    transitionProperty="transform"
    transitionDuration=".2s"
    // transitionTimingFunction="ease-in"
    backgroundColor="#18181b"
    zIndex={1000} 
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav >
            {/* Add social media links based on the `socials` data */}
            <HStack spacing="5">

             
           { socials.map((social) => (<Link href={social.url}><FontAwesomeIcon icon={social.icon} key={social.index} /></Link>))}

        
            </HStack>
          
            
          </nav>
          <nav>
          <HStack spacing="4">
            <Link href="#projects-section" onClick={handleClick('projects')}>Projects</Link>
          <Link  href="#contactme-section" onClick={handleClick("contactme")}>Contact me</Link>
          </HStack>
        
      
     
          
           
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
