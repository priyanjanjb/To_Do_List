import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import Image from "../img/darkForest.jpg";
import BgImage from "../components/BgImage";

export default function SignIn() {
  return (
    <>
      <div id="signIn">
        <BgImage image={Image}>
          <div
            className="bg-zinc-500 bg-opacity-50 border-2 border-gray-400
            py-2 px-7
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
            <Header title="Login" />
            <br />
            <Input halder="Enter User Name" types="txt" /> <br />
            <Input halder="Enter Password" types="password" /> <br />
            <Button caption="Login" />
            <br />
          </div>
        </BgImage>
      </div>
    </>
  );
}
