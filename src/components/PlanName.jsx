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
} from "@chakra-ui/react";
import { InputBox } from "./subComponent/InputBox";
import { BsFillPlusSquareFill } from "react-icons/bs";


export const PlanName = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
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
        colorScheme={"blue"}
        leftIcon={<BsFillPlusSquareFill background={"#3B82F6"}></BsFillPlusSquareFill>}
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
