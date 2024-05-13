import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import BgBox from "./BgBox";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const history = useNavigate();
  function handleSubmit() {
    history("/");
    return null;
  }

  return (
    <div className="py-20">
      <BgBox>
        <Header title="Register" />
        <br />
        <Input halder="Name" types="txt" />
        <br />
        <Input halder="Email" types="txt" />
        <br />
        <Input halder="Phone Number" types="number" />
        <br />
        <Input halder="Password" types="password" />
        <br />
        <Button text="Register" onClick={handleSubmit} />
        <br />
      </BgBox>
    </div>
  );
}
