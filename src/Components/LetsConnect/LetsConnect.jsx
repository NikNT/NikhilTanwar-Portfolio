import React, { useState } from "react";
import styles from "./LetsConnect.module.css";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7_qwf5wgzO7l7vX2Sqv-CzE8mpidNi1c",
  authDomain: "niktanportfolio.firebaseapp.com",
  databaseURL: "https://niktanportfolio-default-rtdb.firebaseio.com",
  projectId: "niktanportfolio",
  storageBucket: "niktanportfolio.appspot.com",
  messagingSenderId: "833333821531",
  appId: "1:833333821531:web:2146341a0e13cc335dbf7e",
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

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
      })
      .catch((error) => {
        console.error("Error submitting form data:", error);
      });
  };

  return (
    <div className={styles.formContainer}>
      <h1>Let's Connect (Beta)</h1>
      <form onSubmit={handleSubmit} className={styles.formWrapper}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LetsConnect;
