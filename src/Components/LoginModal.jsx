import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";

function LoginModal({ customIsOpen, customOnOpen, customOnClose }) {
  return (
    <Modal
      blockScrollOnMount={false}
      isOpen={customIsOpen}
      onClose={customOnClose}
    >
      <ModalOverlay />
      <ModalContent borderRadius={0} w={"100vw"}>
        <ModalHeader>Modal Header</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            {/* Content inside the green box */}
            <Text>Hello</Text>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default LoginModal;
