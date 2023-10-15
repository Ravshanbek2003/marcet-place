import data from "../../__mock__/data";
import Svg from "./Svg";
import "./TopCreators.css";
const TopCreators = () => {
  return (
    <div className="topCreators">
      <div className="topCreators-top">
        <div className="topCreators-top-left">
          {" "}
          <h1>Top creators</h1>
          <p>Checkout Top Rated Creators on the NFT Marketplace</p>
        </div>
        <div className="topCreators-top-right">
          <button>
            <Svg /> View Rankings
          </button>

          
        </div>
      </div>
      <div className="topCreators-box">
        <div className="topCreators-box-img">
          {data.map((user, idx) => {
            return (
              <div key={idx} className="topCreators-box-img-child">
                <div className="circle">{user.id}</div>
                <div className="img-top-box">
                  <img src={`./public/images/top-${user.id}.png`} alt="img" />
                </div>
                <div>
                  <h2>{user.name}</h2>
                  <p>
                    <span>Total Sales:</span>34.53 ETH
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <h1 className="brow-categories">
        Browse categories
      </h1>
    </div>
  );
};

export default TopCreators;
