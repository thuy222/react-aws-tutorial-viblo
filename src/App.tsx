import { useState } from "react";
import reactLogo from "./assets/react.svg";
import sunteco from "./assets/sunteco.png";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Hướng dẫn triển khai CI/CD ReactJS app với AWS Amplify</h1>
        <img src={sunteco} alt="" width="90%" />
      </div>
    </>
  );
}

export default App;
