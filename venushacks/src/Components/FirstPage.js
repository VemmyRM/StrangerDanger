import Map from "./GoogleMaps";
import MapContainer from "./MapContainer";
import image1 from "./second.png";

const FirstPage = ({ see, setNumber, setName, setSee }) => {
  return (
    <div    >
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
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label" >
        Destination      </label>
        <input
          type=""
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(event) => setSee(true)}
        />
        <br />
        <hr />
      </div>
      <div className="mb-3">
        {/* <Map /> */}
        {see ? <img src= {image1} style={{width:'450px', height:'500px'}}/>: <div><MapContainer />  <br></br>
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
      <br />
      <br />
      <br />

      <br />
      <br />
      </div> } 
      </div>
    
    </div>
  );
};

export default FirstPage;
