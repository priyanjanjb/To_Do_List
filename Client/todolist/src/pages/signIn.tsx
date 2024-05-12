import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";

export default function SignIn() {
  return (
    <>
      <div id="signIn" className="py-20">
        <div
          className="bg-zinc-500 bg-opacity-50 border-2 border-gray-400
            py-2 px-7 rounded-3xl
            text-gray-100 leading-tight"
          style={{
            margin: "auto",
            width: "35%",
            height: "100%",
          }}
        >
          <Header title="Login" />
          <br />
          <Input halder="Enter User Name" types="txt" /> <br />
          <Input halder="Enter Password" types="password" /> <br />
          <p>
            <input type="checkbox" /> remember me{" "}
          </p>
          <p>Forgot the password</p>
          <Button caption="Login" />
          <p>
            Don't have an account ? <a href="#">Register</a>{" "}
          </p>
          <br />
        </div>
      </div>
    </>
  );
}
