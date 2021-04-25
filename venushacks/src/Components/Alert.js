import axios from "axios";
import firebase from "firebase";

const Alert = ({ setAlert, name }) => {
  async function sendSMS(to, text) {
    const body = {
      to: to,
      text: text,
    };
    const response = await axios.post(
      "http://localhost:3001/api/messages",
      body
    );
    console.log(response);
  }

  function clickedOK() {
    setAlert(false);
    //get list of friends from firebase

    var friendInfoRef = firebase.database().ref("users/" + name + "/friends");
    friendInfoRef.on("value", (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      let number;
      Object.keys(data).forEach((obj) => {
        console.log("obj: " + obj);
        console.log(Object.values(data[obj]));
        number = Object.values(data[obj])[0];
        sendSMS(
          number,
          "Friend's Name has just checked in to let us know they're ok. Here is their current location:"
        );
      });
    });
    //for each friend in the database
  }

  return (
    <div className="modal" tabIndex="-1" style={{ display: "block" }}>
      <div className="modal-dialog-centered modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Hey! We're checking in.</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>
              It's been a few minutes since we last heard from you. How's it
              going?
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={() => clickedOK()}
              className="btn btn-lg btn-success"
            >
              I'm OK!
            </button>
            <br></br>
            <button type="button" className="btn btn-lg btn-secondary">
              Call my Friend
            </button>
            <br></br>
            <button type="button" className="btn-lg btn btn-danger">
              Call 911
            </button>
            <br></br>
            <button
              type="button"
              className="btn-lg btn btn-success"
              onClick={() => setAlert(false)}
            >
              I've reached my destination!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
