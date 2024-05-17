import { useNavigate } from "react-router-dom";
import Button from "../forms/Button";
import BgBox from "../common/BgBox";
import BgImage from "../common/BgImage";
import Img from "../../img/leafe.jpg";
export default function HomePage() {
  const history = useNavigate();

  function handleSubmit() {
    history("/");
    return console.log("Button Clicked");
  }
  return (
    <>
      <BgImage image={Img}>
        <BgBox RegOrLogForm={false}>
          <div className="mailBlock text-lime-400 flow-root">
            <div className="leftBlock float-left bg-cyan-950 w-3/12">
              <p>Left</p>
            </div>

            <div className="rightBlock float-right bg-blue-600 w-9/12 h-full">
              <p>Right</p>
            </div>
          </div>
        </BgBox>
      </BgImage>
    </>
  );
}
