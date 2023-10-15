import React from "react";
import "./Works.css";
const Works = () => {
  return (
    <div className="works">
      <h1>How it works</h1>
      <h4>Find out how to get started</h4>
      <div className="works-main">
        <div className="works-box">
          <div className="works-box-children">
            <img src="./public/images/works.png" alt="" />
            <div className="xaxa">
              <h3>Setup Your wallet</h3>
              <p>
                Set up your wallet of choice. Connect it to the Animarket by
                clicking the wallet icon in the top right corner.
              </p>
            </div>
          </div>
          <div className="works-box-children">
            <img src="./public/images/works-2.png" alt="" />
            <div className="xaxa">
              <h3>Setup Your wallet</h3>
              <p>
                Set up your wallet of choice. Connect it to the Animarket by
                clicking the wallet icon in the top right corner.
              </p>
            </div>
          </div>
          <div className="works-box-children">
            <img src="./public/images/works-3.png" alt="" />
            <div className="xaxa">
              <h3>Setup Your wallet</h3>
              <p>
                Set up your wallet of choice. Connect it to the Animarket by
                clicking the wallet icon in the top right corner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
