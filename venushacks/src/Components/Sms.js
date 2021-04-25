import axios from "axios";

const SMS = (props) => {
  async function sendSMS() {
    const body = {
      to: "+18735000063",
      text: "Testing from React App",
    };
    const response = await axios.post(
      "http://localhost:3001/api/messages",
      body
    );
    console.log(response);
  }

  return <button onClick={sendSMS}>Click Me!</button>;
};

export default SMS;
