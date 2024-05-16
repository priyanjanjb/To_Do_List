import { useNavigate } from "react-router-dom";
import Button from "./Button";
import BgBox from "./BgBox";
import BgImage from "./BgImage";
import Img from "../img/leafe.jpg";
export default function HomePage() {
  const history = useNavigate();

  function handleSubmit() {
    history("/");
    return console.log("Button Clicked");
  }
  return (
    <>
    <BgImage image={Img}>
    <BgBox>
    <div className="mailBlock text-lime-400 flow-root">
        <div className="leftBlock float-left w-20 bg-cyan-950">
          <p>This is left side paragraph</p>
        </div>

        <div className="rightBlock bg-blue-600">
          <p>This is right side paragraph</p>
        </div>
      </div>
    </BgBox>
     </BgImage> 
    </>
  );
}
