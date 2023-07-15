import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";

const Fetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = firestore.collection("messages");
        const snapshot = await collectionRef.get();
        const fetchedData = snapshot.docs.map((doc) => doc.data());
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Firestore</h1>
      <ul>
        {data.map((item) => (
          <>
            {console.log(item)}
            <li key={item.id}>{item.name}</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;
