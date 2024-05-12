import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import "./index.css";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";


const color = "bg-indigo-200";

function App() {
  return (
    <>
      <div>
        <div className={color}>
          <SignIn />
        </div>
      </div>

      <br />
      <hr />
      <div className={color} >
        <SignUp />
      </div>

      {/* <Test /> */}
    </>
  );
}

export default App;
