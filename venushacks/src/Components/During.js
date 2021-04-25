import { useEffect, useState } from "react";
import Alert from "./Alert";
import {Navbar, Nav} from "react-bootstrap";

const During = (props) => {
  const MINUTE_MS = 60000;
  const [showAlert, setAlert] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Display the Alert!");
      setAlert(true);
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  return (
    <div>
      <Navbar bg="dark" variant="dark" className="container">
        <center>
          <Navbar.Brand>Stranger Danger</Navbar.Brand>
        </center>
      </Navbar>
      {showAlert ? (
        <Alert setAlert={setAlert} name={props.match.params.name} />
      ) : null}
      <center><button className="btn btn-danger btn-large" style={{
            height: "225px",
            width: "225px",
            marginTop: "15%",
            borderRadius: "30px",
          }}>CALL EMERGENCY SERVICES</button></center>
          <center><button className="btn btn-success btn-large" style={{
            height: "225px",
            width:"225px",
            marginTop: "20%",
            borderRadius: "30px",
          }}>I've reached my destination!</button></center>
    </div>
  );
};

export default During;
