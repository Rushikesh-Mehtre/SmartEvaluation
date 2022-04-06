import { useState } from "react";
import React from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import Toastify from "toastify-js";
import { database } from "../firebaseConfig";
import "toastify-js/src/toastify.css";
import "react-toastify/dist/ReactToastify.css";
import { deleteDoc, doc } from "firebase/firestore";
import styles from "../styles/DeleteModal.module.scss";
const DeleteModal = (props) => {
  // const collectionRef = collection(database, "candidates");

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
  const DeleteHandler = (e) => {
    e.preventDefault();
    const docToDelete = doc(database, "candidates", props.id);
    deleteDoc(docToDelete)
      .then((response) => {
        console.log(response);
        Toastify({
          text: "Candidate information deleted",
          duration: 2000,
          newWindow: true,
          close: false,
          gravity: "top",
          position: "center",
          backgroundColor: "#2b6777",
          stopOnFocus: true,
        }).showToast();
        setIsOpen(false);
        navigate("/reviews");
        props.onClick();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className={styles.deleteModal}>
      <span onClick={openModal} className={styles.deleteIcon}>
        <AiFillDelete className={styles.icon} />
      </span>
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
          <p htmlFor="" style={{ display: "flex", flexDirection: "column" }}>
            <span>Do you want to delete report of {props.name}</span>
            <span> (Candidate Id : {props.id})</span>
          </p>
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
              onClick={DeleteHandler}
              style={{
                padding: "5px 10px",
                cursor: "pointer",
                backgroundColor: "Red",
                border: "none",
                color: "white",
              }}
            >
              Delete
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default DeleteModal;
