import firebase from "firebase";
import React, { useState } from "react";
import FirstPage from "./FirstPage";
import "../App.css";
import SecondPage from "./SecondPage";

const Form = (props) => {
  var database = firebase.database();

  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [friendName, setFriendName] = useState("");
  const [friendNumber, setFriendNumber] = useState(0);
  const [showNextPage, setNextPage] = useState(false);

  const [friends, setFriends] = useState([]);
  var fireRef = database.ref("users/" + name + "/friends");
  var newUserRef = fireRef.push();

  function sendData() {
    console.log("name: " + name);
    console.log("number: " + number);
    database.ref("users/" + name).set({
      username: name,
      number: number,
    });

    newUserRef.set({ [friendName]: friendNumber });
  }

  return (
    <div className="container">
      {showNextPage ? (
        <SecondPage
          setFriendName={setFriendName}
          setFriendNumber={setFriendNumber}
          sendData={sendData}
        />
      ) : (
        <FirstPage setNumber={setNumber} setName={setName} />
      )}
      <br></br>
      <button
        className="btn btn-primary"
        onClick={() => setNextPage(!showNextPage)}
      >
        {showNextPage ? "Back" : "Enter Friends Information"}
      </button>
      <br />
      <br />
      <p>Note: The information will be deleted after use</p>
    </div>
  );
};

export default Form;
