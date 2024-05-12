import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Image from "./img/darkForest.jpg";

function App() {
  return (
    <section
      className="fullscreen-bg"
      style={{ background: `url(${Image})`, backgroundSize: "bg-auto", backgroundRepeat: "no-repeat"}}
    >
      <div>
        <div>
          <SignIn />
        </div>
      </div>

      {/* <div>
        <SignUp />
      </div> */}
      
    </section>
  );
}

export default App;
