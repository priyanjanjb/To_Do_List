import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import Image from "../img/darkForest.jpg";
import BgImage from "../components/BgImage";

export default function SignUp() {
  return (
    <>
      <BgImage image={Image}>
        <div
          className="bg-zinc-500 bg-opacity-50 border-2 border-gray-400
          py-2 px-7 rounded-xl
         text-gray-100 leading-tight"
          style={{
            margin: "auto",
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
          }}
          
        >
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
          <br />
        </div>
      </BgImage>
    </>
  );
}
