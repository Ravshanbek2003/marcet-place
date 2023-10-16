import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <div style={{ marginBottom: "30px" }}>
            <img src="./public/assets/images/footer-logo.png" alt="" />
          </div>
          <p className="footer-small-text">
            NFT marketplace UI created with Anima for Figma.
          </p>
          <div>
            <img src="./public/assets/images/footer.png" alt="" />
          </div>
        </div>
        <div className="footer-middle">
          <p className="footer-big-text">Explore</p>
          <p className="footer-small-text">Marketplace</p>
          <p className="footer-small-text">Rankings</p>
          <p className="footer-small-text">Connect a wallet</p>
        </div>
        <div className="footer-right">
          <p className="footer-big-text">Join our weekly digest</p>
          <p className="footer-small-text">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <label htmlFor="xx">
            <input id="xx" type="text" placeholder="Enter your email here" />
            <button> Subscribe</button>
          </label>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Ⓒ NFT Market. Use this template freely.</p>
      </div>
    </>
  );
};

export default Footer;
