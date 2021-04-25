import Map from "./GoogleMaps";
import firebase from "firebase";
import React, { useState } from "react";
import "../App.css";
import SMSForm from "./Sms";

const Form = (props) => {
  var database = firebase.database();

  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [friendName, setFriendName] = useState("");
  const [friendNumber, setFriendNumber] = useState(0);

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
      <SMSForm />
      {/* <div className="mb-3 mt-5">
        <label for="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type=""
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Number
        </label>
        <input
          type=""
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(event) => setNumber(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <Map />
      </div>
      <h1>Enter your friends names!</h1>
      <hr />
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type=""
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(event) => setFriendName(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Number
        </label>
        <input
          type=""
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(event) => setFriendNumber(event.target.value)}
        />
      </div>
      <hr />
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type=""
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(event) => setFriendName(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Number
        </label>
        <input
          type=""
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(event) => setFriendNumber(event.target.value)}
        />
      </div>
      <hr />
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type=""
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(event) => setFriendName(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Number
        </label>
        <input
          type=""
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(event) => setFriendNumber(event.target.value)}
        />
      </div>
      <hr />
      <button type="submit" className="btn btn-primary" onClick={sendData}>
        Submit
      </button> */}
    </div>
  );
};

export default Form;
