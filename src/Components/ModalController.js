import React, { useState } from "react";
import LoginModal from "./LoginModal";
// import AnotherComponent from "./AnotherComponent";
function ModalController() {
  const [isCustomLoginModalOpen, setCustomLoginModalOpen] = useState(false);

  const openCustomLoginModal = () => {
    setCustomLoginModalOpen(true);
  };

  const closeCustomLoginModal = () => {
    setCustomLoginModalOpen(false);
  };

  return (
    <>
      {/* <AnotherComponent onLoginModalOpen={openCustomLoginModal} /> */}
      <LoginModal
        customIsOpen={isCustomLoginModalOpen}
        customOnOpen={openCustomLoginModal}
        customOnClose={closeCustomLoginModal}
      />
    </>
  );
}

export default ModalController;
