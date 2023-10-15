import "./DiscoverDigital.css";
import RoscetLaunch from "./components/RoscetLaunch";
const DiscoverDigital = () => {
  return (
    <div className="discoverDigital">
      <div className="discoverDigital-left">
        <h1>Discover digital art & Collect NFTs</h1>
        <p>
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </p>
        <button>
          <RoscetLaunch /> Get Started
        </button>
        <div className="patpischit">
          <div className="pat-box">
            <h4>240k+</h4>
            <p>Total Sale</p>
          </div>
          <div className="pat-box">
            <h4>100k+</h4>
            <p>Auctions</p>
          </div>
          <div className="pat-box">
            <h4>240k+</h4>
            <p>Artists</p>
          </div>
        </div>
      </div>
      <div className="discoverDigital-right">
        <img src="./public/images/NFT.svg" alt="" />
      </div>
    </div>
  );
};

export default DiscoverDigital;
