import Button from "./Button";
import Header from "./Header";
import Input from "./Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BgBox from "../common/BgBox";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Img from "../../img/darkForest.jpg";
import BgImage from "../common/BgImage";

export default function SignIn() {
  const nextPage = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user.user.email);
      nextPage("/homepage");
    } catch (e) {
      alert("User name or password is not correct");
      console.log("Not valide user");
    }
  }

  return (
    <BgImage image={Img}>
      <div id="signIn" className="py-20">
        <BgBox RegOrLogForm={true}>
          <Header title="Login" />
          <Input
            halder="Email"
            type="text"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <Input
            halder="Password"
            type="password"
            onChange={(e: any) => setPassword(e.target.value)}
            value={password}
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
          <div className="text-center my-1">
            Don't have an account ?{" "}
            <a href="http://localhost:5173/signup">Register</a>
          </div>
          <br />
        </BgBox>
      </div>
    </BgImage>
  );
}
