import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import BgBox from "./BgBox";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  function handleSubmit(e:any) {
    e.preventDefault();
    console.log("Name: " + name + " Email: " + email + " Phone: " + phone + " Password: " + password + " Retype Password: " + retypePassword);
    
  }

  return (
    <div className="py-20">
      <BgBox>
        <Header title="Register" />
        <Input halder="Name" type="txt" onChange={(e:any) =>setName(e.target.value)}/>
        <Input halder="Email" type="txt" onChange={(e:any) =>setEmail(e.target.value)}/>
        <Input halder="Phone Number" type="number"onChange={(e:any) =>setPhone(e.target.value)} />
        <Input halder="Password" type="password" onChange={(e:any) =>setPassword(e.target.value)}/>
        <Input halder="Retype Password" type="password" onChange={(e:any) =>setRetypePassword(e.target.value)}/>
        <Button text="Register" type="submit" onClick={handleSubmit}/>
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
  );
}
