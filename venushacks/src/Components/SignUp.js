import "../App.css";
import Map from "./GoogleMaps";
import {Link} from "react-router-dom";

function SignUp(){
 
  return (
    <div>
      <br />
      <h1>Sign Up!</h1>

      <h1>Enter your info</h1>
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
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email
        </label>
        <input
          type=""
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <hr />
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          UserName
        </label>
        <input
          type=""
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Password
        </label>
        <input
          type=""
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <hr />
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Number
        </label>
        <input
          type=""
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <hr />
      <Link type="submit" className="btn btn-primary"  to="/submitinfo">Submit</Link>
    </div>
  );
  }

export default SignUp;
