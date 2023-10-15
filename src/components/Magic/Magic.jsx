// ./public/images/discover-1.png
import Svg from "./Svg";
import "./Magic.css";
import Time from "./Time";
const Magic = () => {
  return (
    <div className="magic">
      <div className="container">
        <div className="magic-left">
          <h1>Magic Mashrooms</h1>
          <button>
            {" "}
            <Svg />
            See NFT
          </button>
        </div>
        <div className="magic-right">
          <Time />
        </div>
      </div>
    </div>
  );
};

export default Magic;
