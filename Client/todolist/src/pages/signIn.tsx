import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import Image from "../img/darkForest.jpg";
import BgImage from "../components/BgImage";

export default function SignIn() {
  return (
    <>
      <div>
        <BgImage image={Image}>
        <Header title="Login" />
        <br />
        <Input halder="Enter User Name" types="txt" /> <br />
        <Input halder="Enter Password" types="password" />
        <br />
        <Button caption="Login" />
        <Button caption="Register" />
        </BgImage>
      </div>
    </>
  );
}
