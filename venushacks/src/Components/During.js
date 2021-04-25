import { useEffect, useState } from "react";
import Alert from "./Alert";

const During = (props) => {
  const MINUTE_MS = 60000;
  const [showAlert, setAlert] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Display the Alert!");
      setAlert(true);
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  return (
    <div>
      {showAlert ? (
        <Alert setAlert={setAlert} name={props.match.params.name} />
      ) : null}
      <button>Click me for help please</button>
    </div>
  );
};

export default During;
