import Button from "./Button";
import Header from "./Header";
import Input from "./Input";
import BgBox from "../common/BgBox";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Img from "../../img/darkForest.jpg";
import BgImage from "../common/BgImage";

export default function SignUp() {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  function handleSubmit(e: any) {
    try {
      e.preventDefault();
      if (password !== retypePassword) {
        alert("password not match");
        return;
      }

      createUserWithEmailAndPassword(auth, email, password);
      history("/");
    } catch (e) {
      alert("somthing went wrong");
      console.log("somthing went wrong");
    }
  }

  return (
    <BgImage image={Img}>
      <div className="py-20">
        <BgBox RegOrLogForm={true}>
          <Header title="Register" />
          <Input
            halder="Name"
            type="txt"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
          <Input
            halder="Email"
            type="txt"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <Input
            halder="Phone Number"
            type="number"
            value={phone}
            onChange={(e: any) => setPhone(e.target.value)}
          />
          <Input
            halder="Password"
            type="password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <Input
            halder="Retype Password"
            type="password"
            value={retypePassword}
            onChange={(e: any) => setRetypePassword(e.target.value)}
          />
          <Button text="Register" type="submit" onClick={handleSubmit} />
          <p>
            <a
              href="http://localhost:5173/"
              className="flow-root text-center my-1"
            >
              Back to Login
            </a>
          </p>
        </BgBox>
      </div>
    </BgImage>
  );
}
