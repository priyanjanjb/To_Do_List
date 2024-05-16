import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import HomePage from "./pages/homaPage";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path = "/homepage" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    
    
      
  );
}

export default App;
