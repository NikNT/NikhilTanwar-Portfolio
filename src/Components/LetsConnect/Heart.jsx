import React, { useState, useEffect } from "react";
import { firestore } from "../firebase";
import heart from "../../Assets/red-heart.png";

function HeartsCounter() {
  const [heartsCount, setHeartsCount] = useState(0);

  // Function to handle incrementing the hearts count
  const incrementHeartsCount = () => {
    const newCount = heartsCount + 1;

    // Update the count in Firebase
    firestore.firestore().doc("hearts/counter").set({ count: newCount });
  };

  // Retrieve the count from Firebase when the component mounts
  useEffect(() => {
    const heartsCountRef = firestore.firestore().doc("hearts/counter");

    const unsubscribe = heartsCountRef.onSnapshot((snapshot) => {
      const count = snapshot.data()?.count || 0;
      setHeartsCount(count);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <img src={heart} alt="Heart" onClick={incrementHeartsCount} />
      <p>Total Hearts: {heartsCount}</p>
    </div>
  );
}

export default HeartsCounter;
