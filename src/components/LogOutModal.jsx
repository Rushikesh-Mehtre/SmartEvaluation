import { useState } from "react";
import React from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

const LogOutModal = () => {
  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const logOutHandler = () => {
    localStorage.removeItem("role");
    navigate("/");
  };
  return (
    <div>
      <button
        onClick={openModal}
        style={{
          border: "none",
          backgroundColor: "transparent",
          fontSize: "16px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Log out
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <form
          action=""
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <label htmlFor="">Do you want to log out ?</label>
          <div style={{ alignSelf: "flex-end" }}>
            <button
              onClick={closeModal}
              style={{
                marginRight: "20px",
                padding: "5px 10px",
                cursor: "pointer",
                backgroundColor: "black",
                border: "none",
                color: "white",
              }}
            >
              Cancel
            </button>
            <button
              onClick={logOutHandler}
              style={{
                padding: "5px 10px",
                cursor: "pointer",
                backgroundColor: "Red",
                border: "none",
                color: "white",
              }}
            >
              Logout
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default LogOutModal;
