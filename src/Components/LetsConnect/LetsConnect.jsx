import React, { useState } from "react";
import styles from "./LetsConnect.module.css";
import heart from "../../Assets/heart.png";
import redHeart from "../../Assets/red-heart.png";
import lightHeart from "../../Assets/heart-light.png";

import { firestore } from "../firebase";
import Modal from "../Modal/Modal";

const LetsConnect = ({ mode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [like, setLike] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    firestore
      .collection("messages")
      .add({
        name,
        email,
        message,
      })
      .then(() => {
        console.log("Form data submitted successfully!");
        setName("");
        setEmail("");
        setMessage("");
        openModal();
      })
      .catch((error) => {
        console.error("Error submitting form data:", error);
      });
  };

  const handleHeart = () => {
    setLike(!like);
  };

  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.letsConnectHeading}>Let's Connect</h4>
        <div className={styles.wrapper}>
          <div className={styles.leftContent}>
            <section>
              <p>Thanks for scrolling through my portfolio.</p>
              <p>I really appreciate it.</p>
              <p>
                If you liked something, don't forget to message me about it.
              </p>
              <p>
                If you didn't, I would love to have any
                suggestion/recommendation.
              </p>
              <p>
                Send a message to connect with me or send me a
                <img
                  src={like ? redHeart : mode ? lightHeart : heart}
                  alt="Heart"
                  onClick={handleHeart}
                  className={styles.heart}
                />
              </p>
            </section>
          </div>
          <div className={styles.rightContent}>
            <form onSubmit={handleSubmit} className={styles.formWrapper}>
              <div>
                {/* <label htmlFor="name">Name</label> */}
                <input
                  type="text"
                  id="name"
                  value={name}
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                {/* <label htmlFor="email">Email</label> */}
                <input
                  // type="email"
                  type="text"
                  id="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                {/* <label htmlFor="message">Message</label> */}
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  value={message}
                  placeholder="Message"
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div>
                <button type="submit" className={styles.submitButton}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.modal}>
          {isModalOpen && <Modal closeModal={closeModal} name={name} />}
        </div>
        {isModalOpen && <div className={styles.overlay}></div>}
      </div>
    </>
  );
};

export default LetsConnect;
