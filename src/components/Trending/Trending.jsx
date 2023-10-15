import { useState } from "react";
import "./Trending.css";
const Trending = () => {
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img3, setImg3] = useState(null);
  return (
    <div className="trending">
      <h1>Trending Collection</h1>
      <p>Checkout our weekly updated trending collection.</p>
      <div className="scroll">
      <div className="trending-img-box">
        <div className="trending-box">
          <img
            className="big-img"
            src={img1 ? img1 : "./public/images/trending-1-big.svg"}
            alt="img"
          />
          <div className="trending-box-bottom">
            <img
              onClick={(e) => setImg1(e.target.alt)}
              src="./public/images/trending-1-small-1.png"
              alt="./public/images/trending-1-small-1.png"
            />
            <img
              onClick={(e) => setImg1(e.target.alt)}
              src="./public/images/trending-1-small-2.png"
              alt="./public/images/trending-1-small-2.png"
            />
            <img
              onClick={(e) => setImg1(e.target.alt)}
              src="./public/images/trending-1-small-3.svg"
              alt={null}
            />
          </div>
          <h3>DSGN Animals</h3>
          <p>
            <span>
              <img src="./public/images/trending-1-bot.png" alt="" />
            </span>{" "}
            MrFox
          </p>
        </div>
        <div className="trending-box">
          <img
            className="big-img"
            src={img2 ? img2 : "./public/images/trending-2-big.svg"}
            alt="img"
          />
          <div className="trending-box-bottom">
            <img
              onClick={(e) => setImg2(e.target.alt)}
              src="./public/images/trending-2-small-1.png"
              alt="./public/images/trending-2-small-1.png"
            />
            <img
              onClick={(e) => setImg2(e.target.alt)}
              src="./public/images/trending-2-small-2.png"
              alt="./public/images/trending-2-small-2.png"
            />
            <img
              onClick={(e) => setImg2(e.target.alt)}
              src="./public/images/trending-1-small-3.svg"
              alt={null}
            />
          </div>
          <h3>Magic Mushrooms</h3>
          <p>
            <span>
              <img src="./public/images/trending-2-bot.png" alt="" />
            </span>{" "}
            Shroomie
          </p>
        </div>
        <div className="trending-box">
          <img
            className="big-img"
            src={img3 ? img3 : "./public/images/trending-3-big.svg"}
            alt="img"
          />
          <div className="trending-box-bottom">
            <img
              onClick={(e) => setImg3(e.target.alt)}
              src="./public/images/trending-3-small-1.png"
              alt="./public/images/trending-3-small-1.png"
            />
            <img
              onClick={(e) => setImg3(e.target.alt)}
              src="./public/images/trending-3-small-2.png"
              alt="./public/images/trending-3-small-2.png"
            />
            <img
              onClick={(e) => setImg3(e.target.alt)}
              src="./public/images/trending-1-small-3.svg"
              alt={null}
            />
          </div>
          <h3>Disco Machines</h3>
          <p>
            <span>
              <img src="./public/images/trending-3-bot.png" alt="" />
            </span>{" "}
            BeKind2Robots
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Trending;
