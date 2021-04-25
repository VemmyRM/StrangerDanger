import firebase from "firebase";
import React, { useState } from "react";
import FirstPage from "./FirstPage";
import "../App.css";
import SecondPage from "./SecondPage";
import SMS from "./Sms";

const Form = (props) => {
  var database = firebase.database();

  const [name, setName] = useState("");
  const [see, setSee] = useState(false);
  const [number, setNumber] = useState(0);

  const [showNextPage, setNextPage] = useState(false);

  const [friendName1, setFriendName] = useState("");
  const [friendNumber1, setFriendNumber] = useState(0);
  const [friendName2, setFriendName2] = useState("");
  const [friendNumber2, setFriendNumber2] = useState(0);
  const [friendName3, setFriendName3] = useState("");
  const [friendNumber3, setFriendNumber3] = useState(0);

  var fireRef = database.ref("users/" + name + "/friends");

  function sendData() {
    console.log("name: " + name);
    console.log("number: " + number);
    database.ref("users/" + name).set({
      username: name,
      number: number,
    });

    fireRef.push({ [friendName1]: friendNumber1 });
    fireRef.push({ [friendName2]: friendNumber2 });
    fireRef.push({ [friendName3]: friendNumber3 });
  }

  return (
    <div className="container">
      {showNextPage ? (
        <SecondPage
          setFriendName={setFriendName}
          setFriendNumber={setFriendNumber}
          setFriendName2={setFriendName2}
          setFriendNumber2={setFriendNumber2}
          setFriendName3={setFriendName3}
          setFriendNumber3={setFriendNumber3}
          sendData={sendData}
          setName={setName}
          setNumber={setNumber}
          Name={name}
        />
      ) : (
        <FirstPage setNumber={setNumber} setName={setName} setSee={setSee} see={see}  />
      )}
      <br></br>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button
        className="btn btn-primary"
        onClick={() => setNextPage(!showNextPage)}
<<<<<<< HEAD
        style={{marginTop: '100px'}}
=======
        style={{ marginTop: "2000px" }}
>>>>>>> f08efac303142e638661fd5aefb8ce86be0cd85b
      >
        {showNextPage ? "Back" : "Enter Friends Information"}
      </button>
      <br />
      <br />
      <p>Note: The information will be deleted after use.</p>
    </div>
  );
};

export default Form;
