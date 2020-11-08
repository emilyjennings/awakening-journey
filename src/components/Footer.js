import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-link"><Link to="/">Home</Link></div>
      <div className="footer-link"><Link to="/about">About</Link></div>
      <div className="footer-link"><Link to="/contact">Contact</Link></div>
      <div className="footer-link"><a href="https://awakening-journey.medium.com">Blog</a></div>
      <div className="footer-link"><a href="https://join.slack.com/t/waking-upworkspace/shared_invite/zt-izfp06jo-j0jDznPIrbUseT_RCyXn~Q">Slack</a></div>

    </div>

  );
}

export default Footer;
