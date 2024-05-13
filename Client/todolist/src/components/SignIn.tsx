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
    return null;
  }
  return (
    <div id="signIn" className="py-20">
      <BgBox>
        <Header title="Login" />
        <br />
        <Input halder="Name" types="txt" /> <br />
        <Input halder="Password" types="password" /> <br />
        <div className="flow-root ">
          <p className="float-left ">
            <input type="checkbox" /> remember me{" "}
          </p>
          <p className="text-right flex-auto">
            <a href="#">Forgot the password</a>
          </p>
        </div>
        <Button text="Login " onClick={handleSubmit} />
        <div className="text-center my-1">
          Don't have an account ?{" "}
          <a href="http://localhost:5173/signup">Register</a>
        </div>
        <br />
      </BgBox>
    </div>
  );
}
