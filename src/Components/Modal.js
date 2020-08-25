import React, { useState } from "react";
import "../css/modal.css";
import ModalContent from "./ModalContent";

export const Modal = (props) => {
  const [leftWidth, setLeftWidth] = useState(70);
  const [rightWidth, setRightWidth] = useState(20);

  const handleChange = (dir) => {
    if (dir === "left" && rightWidth >= 1) {
      setLeftWidth(leftWidth + 1);
      setRightWidth(rightWidth - 1);
    } else if (dir === "right" && leftWidth >= 1) {
      setRightWidth(rightWidth + 1);
      setLeftWidth(leftWidth - 1);
    }
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <ModalContent
          dir={"left"}
          handleChange={handleChange}
          modalWidth={leftWidth}
        />
        <ModalContent
          dir={"right"}
          handleChange={handleChange}
          modalWidth={rightWidth}
        />
      </div>
    </div>
  );
};

export default Modal;
