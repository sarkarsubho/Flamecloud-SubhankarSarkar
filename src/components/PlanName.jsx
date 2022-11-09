import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  Text,
  background,
} from "@chakra-ui/react";
import { InputBox } from "./subComponent/InputBox";
import { BsFillPlusSquareFill } from "react-icons/bs";


export const PlanName = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) "
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
        color={"white"}
        backgroundColor={"#2563EB"}
        leftIcon={<BsFillPlusSquareFill color={"#3B82F6"}></BsFillPlusSquareFill>}
        _hover={{color:"blue", background:"white"}}
      >
        New Plan
      </Button>
      {/* modal */}

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Plan Name</ModalHeader>

          <ModalBody>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ullam
              odit voluptatibus?
            </Text>
            <InputBox></InputBox>
          </ModalBody>
          <ModalFooter gap={"10px"}>
            <Button onClick={onClose} variant="outline" colorScheme={`red`}>
              Cancel
            </Button>
            <Button colorScheme={"blue"}>Create</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
