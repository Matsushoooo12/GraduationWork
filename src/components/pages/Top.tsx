import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import FirstView from "../../images/FirstView.svg";
import Logo from "../../images/Logo.png";

const Top: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box mt="64px">
      <Flex
        justifyContent="center"
        alignItems="center"
        mx="20px"
        direction={{ base: "column", md: "row", lg: "row" }}
      >
        <Box mr="8px">
          <Box w="100px" mb="16px">
            <Image src={Logo} alt="Logo" />
          </Box>
          <Heading size="lg" mb="8px">
            創作活動の仲間を集めよう
          </Heading>
          <Text mb="16px" fontSize="12px" fontWeight="bold">
            どこでも誰とでも、繋がりたいクリエイターと１対１で繋がれる
          </Text>
          <Button
            bg="blue.900"
            color="white"
            _hover={{ opacity: 0.8, bg: "blue.900" }}
            onClick={() => navigate("/signup")}
          >
            はじめる
          </Button>
        </Box>
        <Box boxSize="md" ml="8px">
          <Image src={FirstView} alt="First View" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Top;
