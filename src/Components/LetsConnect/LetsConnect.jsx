import React, { useState } from "react";
import styles from "./LetsConnect.module.css";

// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";

import { firestore } from "../firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyC7_qwf5wgzO7l7vX2Sqv-CzE8mpidNi1c",
//   authDomain: "niktanportfolio.firebaseapp.com",
//   databaseURL: "https://niktanportfolio-default-rtdb.firebaseio.com",
//   projectId: "niktanportfolio",
//   storageBucket: "niktanportfolio.appspot.com",
//   messagingSenderId: "833333821531",
//   appId: "1:833333821531:web:2146341a0e13cc335dbf7e",
// };

// firebase.initializeApp(firebaseConfig);
// const firestore = firebase.firestore();

const LetsConnect = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save form data to Firestore
    firestore
      .collection("messages")
      .add({
        name,
        email,
        message,
      })
      .then(() => {
        console.log("Form data submitted successfully!");
        // Clear form fields
        setName("");
        setEmail("");
        setMessage("");
        window.alert(
          `Hi ${name}, your response has been recorded. I'll contact you asap ♥️`
        );
      })
      .catch((error) => {
        console.error("Error submitting form data:", error);
      });
  };

  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     event.preventDefault();
  //     event.target.form.submit(); // Trigger the form submission
  //   }
  // };

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
              <p>Send a message to connect with me or send me a ♥️ </p>
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
                  type="email"
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
      </div>
    </>
  );
};

export default LetsConnect;
