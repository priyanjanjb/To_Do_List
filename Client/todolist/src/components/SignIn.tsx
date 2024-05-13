import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BgBox from "./BgBox";

export default function SignIn() {
  const nextPage = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // Corrected the function to directly receive the event 'e'
  function handleSubmit(e: any) {
    e.preventDefault(); // This should be called first to prevent default form behavior\
    console.log("Name"+name+ "Password" + password);
    nextPage("/signup"); // Navigate after handling the data
  }

  return (
    <div id="signIn" className="py-20">
      <BgBox>
        <Header title="Login" />
        <form onSubmit={handleSubmit}>
          <Input
            halder="Name"
            type="text"
            onChange={(e: any) => setName(e.target.value)}
          />
          <Input
            halder="Password"
            type="password"
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <div className="flow-root ">
            <p className="float-left ">
              <input type="checkbox" /> remember me{" "}
            </p>
            <p className="text-right flex-auto">
              <a href="#">Forgot the password</a>
            </p>
          </div>
          <Button text="Login" type="submit" onClick={handleSubmit} />{" "}
          {/* Changed type to submit */}
          <div className="text-center my-1">
            Don't have an account ?{" "}
            <a href="http://localhost:5173/signup">Register</a>
          </div>
        </form>
        <br />
      </BgBox>
    </div>
  );
}
