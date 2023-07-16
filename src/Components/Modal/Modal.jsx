import React, { useState, useEffect } from "react";
import styles from "./Modal.module.css";
import submit from "../../Assets/submission.gif";

const Modal = ({ closeModal, name }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        {!showContent && (
          <>
            <div className={styles.modal_submission}>
              <h4>Submitting your response!</h4>
              <img src={submit} className={styles.submit} alt="Submission" />
            </div>
          </>
        )}
        {showContent && (
          <div>
            <span className={styles.modal_content_close} onClick={closeModal}>
              &times;
            </span>
            <h2>Thanks for you submission!</h2>
            <br />
            <p>
              Hi {name}! 👋🏽 <br />
              <br />
              I've recieved your message.
              <br />I truly appreciate you for taking out some time to send this
              message. I'll contact you back soon!
              <br />
              <br />
              Thanks a lot 🍀
              <br />
              <br />
              Nikhil
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
