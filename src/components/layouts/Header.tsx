import {
  Avatar,
  Box,
  Drawer,
  DrawerContent,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { IconAdjustmentsHorizontal } from "@tabler/icons";

interface Props {
  children: ReactNode;
}

const Header: React.FC<Props> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex>
        <Box
          minHeight="100vh"
          maxHeight="100%"
          bg="blue.900"
          boxShadow="md"
          w={isOpen ? "240px" : "0"}
        ></Box>
        <Box flex="1" bg="white">
          <Box
            w="100%"
            h={{ base: "64px", md: "64px", lg: "80px" }}
            boxShadow="md"
            px={8}
            position="fixed"
            backgroundColor="white"
          >
            <Flex h="100%" alignItems="center">
              <Icon
                as={GiHamburgerMenu}
                display="block"
                w={10}
                h={10}
                onClick={onOpen}
                color="blue.900"
                cursor="pointer"
                mr="40px"
              />
              <InputGroup w="60%">
                <InputLeftElement
                  pointerEvents="none"
                  children={<AiOutlineSearch />}
                />
                <Input type="text" placeholder="Search" />
                <InputRightElement
                  cursor="pointer"
                  children={<IconAdjustmentsHorizontal />}
                />
              </InputGroup>
              <Spacer />
              <Popover>
                <PopoverTrigger>
                  <Box>
                    <Avatar bg="blue.900" size="sm" />
                  </Box>
                </PopoverTrigger>
                <PopoverContent w="160px" mr="20px">
                  <PopoverArrow />
                  <PopoverBody>Are you sure</PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
          </Box>
          <Box pt={{ base: "64px", md: "64px", lg: "80px" }}>{children}</Box>
        </Box>
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerContent
          bg="blue.900"
          display={{ base: "block", md: "block", lg: "none" }}
        >
          <Box
            w="240px"
            height="100vh"
            boxShadow="md"
            display={{ base: "none", lg: "block" }}
          ></Box>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
