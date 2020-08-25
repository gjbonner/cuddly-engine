import React, { useState } from "react";

export const ModalContent = (props) => {
  const { modalWidth, handleChange, dir } = props;
  const [width, setWidth] = useState(modalWidth);
  return (
    <div className="content" style={{ width: modalWidth + "%" }}>
      {modalWidth}
      <button onClick={() => handleChange(dir)}>change</button>
    </div>
  );
};

export default ModalContent;
