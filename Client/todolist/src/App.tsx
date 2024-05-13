import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Image from "./img/darkForest.jpg";
import BgImage from "./components/BgImage";

function App() {
  return (
    <BgImage image={Image}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </BgImage>
    
    
      
  );
}

export default App;
