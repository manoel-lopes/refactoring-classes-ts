import { useEffect, useState } from "react";
import ReactModal from "react-modal";

const Modal = (props) => {
  const { isOpen, setIsOpen, children } = props;

  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    console.log(props);
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "#F0F0F5",
          color: "#000000",
          borderRadius: "8px",
          width: "736px",
          border: "none",
        },
        overlay: {
          backgroundColor: "#121214e6",
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
