import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import Image from "../img/darkForest.jpg";
import BgImage from "../components/BgImage";

export default function SignUp() {
  return (
    <>
    <BgImage image={Image}>
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
      <Button caption="Register" />
      <Button caption="Back to Login" />
      <br />
      </BgImage>
    </>
  );
}
