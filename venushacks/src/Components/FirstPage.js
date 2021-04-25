import Map from "./GoogleMaps";
import MapContainer from "./MapContainer";

const FirstPage = ({ setNumber, setName }) => {
  return (
    <div>
      <br />
      <h1>Your Information</h1>
      <hr />
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
          Phone Number
        </label>
        <input
          type=""
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(event) => setNumber(event.target.value)}
        />
        <br />
        <p>Destination</p>
        <hr />
      </div>
      <div className="mb-3">
        {/* <Map /> */}
        <MapContainer />

      </div>
    </div>
  );
};

export default FirstPage;
