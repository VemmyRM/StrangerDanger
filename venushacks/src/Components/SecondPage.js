import "../App.css";
import Map from "./GoogleMaps";
import {
  Link
} from "react-router-dom";

const SecondPage = ({
  setFriendName,
  setFriendNumber,
  setFriendName3,
  setFriendNumber3,
  setFriendName2,
  setFriendNumber2,
  setName,
  setNumber,
  sendData,
}) => {
  return (
    <div>
      <br />
      <h1>Friend Information</h1>

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
      <Link type="submit" className="btn btn-primary" to="/" onClick={sendData} >
        Submit
      </Link>
    </div>
  );
};

export default SecondPage;
