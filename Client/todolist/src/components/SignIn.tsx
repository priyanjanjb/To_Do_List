import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BgBox from "./BgBox";

export default function SignIn() {
  const nextPage = useNavigate();
  function handleSubmit() {
    nextPage("/signup");
    return null
  }
  return (
    <div id="signIn" className="py-20">
      <BgBox>
        <Header title="Login" />
        <br />
        <Input halder="Enter User Name" types="txt" /> <br />
        <Input halder="Enter Password" types="password" /> <br />
        <p>
          <input type="checkbox" /> remember me{" "}
        </p>
        <p>Forgot the password</p>
        <Button text="Login" onClick={handleSubmit} />
        <p>
          Don't have an account ?{" "}
          <a href="http://localhost:5173/signup">Register</a>
        </p>
        <br />
      </BgBox>
    </div>
  );
}
