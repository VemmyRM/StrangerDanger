import "../App.css";

const SecondPage = ({ setFriendName, setFriendNumber, sendData }) => {
  return (
    <div>
      <br />
      <h1>Friend Information</h1>
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
          Phone Number
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
          Phone Number
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
          Phone Number
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
      </button>
    </div>
  );
};

export default SecondPage;
