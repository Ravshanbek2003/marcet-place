//
import Svg from "./Svg";
import "./Discover.css";
const Discover = () => {
  return (
    <div className="discover">
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
      <div className="discover-box">
        <div className="discover-in">
          <div className="discover-child">
            <img src="./public/assets/images/discover-1.png" alt="" />
            <div className="discover-child-bottom-2">
              <h4>Distant Galaxy</h4>
              <div className="discover-logo">
                <span>
                  <img src="./public/assets/images/discover-small-1.png" alt="" />
                </span>
                MoonDancer
              </div>
              <div className="discover-child-bottom-bot">
                <div className="price">
                  <p>Price</p>
                  <h4>1.63 ETH</h4>
                </div>
                <div className="price">
                  <p>Highest Bid</p>
                  <h4>0.33 wETH</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="discover-child">
            <img src="./public/assets/images/discover-2.png" alt="" />
            <div className="discover-child-bottom-2">
              <h4>Life On Edena</h4>
              <div className="discover-logo">
                <span>
                  <img src="./public/assets/images/discover-small-2.png" alt="" />
                </span>
                NebulaKid
              </div>
              <div className="discover-child-bottom-bot">
                <div className="price">
                  <p>Price</p>
                  <h4>1.63 ETH</h4>
                </div>
                <div className="price">
                  <p>Highest Bid</p>
                  <h4>0.33 wETH</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="discover-child">
            <img src="./public/assets/images/discover-3.png" alt="" />
            <div className="discover-child-bottom-2">
              <h4>AstroFiction</h4>
              <div className="discover-logo">
                <span>
                  <img src="./public/assets/images/discover-small-3.png" alt="" />
                </span>
                Spaceone
              </div>
              <div className="discover-child-bottom-bot">
                <div className="price">
                  <p>Price</p>
                  <h4>1.63 ETH</h4>
                </div>
                <div className="price">
                  <p>Highest Bid</p>
                  <h4>0.33 wETH</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
