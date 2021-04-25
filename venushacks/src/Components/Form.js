import Map from "./GoogleMaps";
import firebase from "firebase";
import React, { useState } from "react";

const Form = (props) => {
  var database = firebase.database();

  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [friendName1, setFriendName] = useState("");
  const [friendNumber1, setFriendNumber] = useState(0);
  const [friendName2, setFriendName2] = useState("");
  const [friendNumber2, setFriendNumber2] = useState(0);
  const [friendName3, setFriendName3] = useState("");
  const [friendNumber3, setFriendNumber3] = useState(0);

  const [friends, setFriends] = useState({name:'ptk', number:'00'});
  var fireRef = database.ref("users/" + name + "/friends");

  function sendData() {
    console.log("name: " + name);
    console.log("number: " + number);
    database.ref("users/" + name).set({
      username: name,
      number: number,
    });

    fireRef.push({[friendName1]:friendNumber1});
    fireRef.push({[friendName2]:friendNumber2});
    fireRef.push({[friendName3]:friendNumber3});
    
  }


  return (
    <div className="container">
      <div className="mb-3 mt-5">
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
          onChange={(event) => setFriendName2(event.target.value)}
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
          onChange={(event) => setFriendNumber2(event.target.value)}
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
          onChange={(event) => setFriendName3(event.target.value)}
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
          onChange={(event) => setFriendNumber3(event.target.value)}
        />
      </div>
      <hr />
      <button type="submit" className="btn btn-primary" onClick={sendData}>
        Submit
      </button>
    </div>
  );
};

export default Form;
