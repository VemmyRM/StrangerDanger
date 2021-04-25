import axios from "axios";

const Alert = ({ setAlert }) => {
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
    //for each friend in the database
    sendSMS(
      "friendsNumber",
      "Friend's Name has just checked in to let us know they're ok. Here is their current location:"
    );
  }

  return (
    <div className="modal" tabIndex="-1" style={{ display: "block" }}>
      <div className="modal-dialog">
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
              onClick={() => setAlert(false)}
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
