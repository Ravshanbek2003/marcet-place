// ./public/images/brow
import Svg from "./Svg";
import "./Join.css";
const Join = () => {
  return (
    <div className="join">
      <div className="join-left">
        <img src="./public/images/join.png" alt="" />
      </div>
      <div className="join-right">
        <h1>
          Join our weekly <br /> digest
        </h1>
        <p>
          Get exclusive promotions & updates <br /> straight to your inbox.
        </p>
        <label htmlFor="xx">
            
          <input id="xx" type="text" placeholder="Enter your email here" />
          <button>
            {" "}
            <Svg /> Subscribe
          </button>
        </label>
      </div>
    </div>
  );
};

export default Join;
