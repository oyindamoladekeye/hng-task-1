import "../Styles/profilepage.css";
import slack from "../images/slack.jpg";
import github from "../images/github.jpg";
import ZuriLogo from "../images/zuri-logo.jpg";
import IngressiveLogo from "../images/ingressive-logo.jpg";
import Footer from "../Component/Footer";
import {Link} from "react-router-dom";
const Profilepage = () => {
  return (
    <div className="profilecontainer">
      <div className="main">
        <div className="sharebtn"></div>
        <div className="profiledetails">
          <div className="profile">
            {/* <div className="sharebtn"></div> */}
            <div className="img"></div>
            <p id="twitter">Pemisere16</p>
            <p id="slack">
              <a href="https://slack.com/Adekeyeaishat">Adekeye Aishat</a>
            </p>
          </div>
          <div className="links">
            <a
              href="https://twitter.com/pemisere16"
              target="blank"
              className="btn"
              id="twitterlink"
            >
              Twitter Link
            </a>
            <a
              href="https://training.zuri.team/"
              target="blank"
              id="btn__zuri"
              className="btn"
            >
              Zuri Team
            </a>
            <a
              href="https://books.zuri.team/"
              target="blank"
              className="btn"
              id="books"
            >
              Zuri Books
            </a>
            <a
              href="https://books.zuri.team/python-for-beginners?ref_id=Oyinda"
              target="blank"
              className="btn"
              id="book__python"
            >
              Python Books
            </a>
            <a
              href="https://background.zuri.team/"
              target="blank"
              className="btn"
              id="pitch"
            >
              Background Checks For Coders
            </a>
            <a
              href="https://books.zuri.team/design-rules"
              target="blank"
              className="btn"
              id="book__design"
            >
              Design Books
            </a>
            <Link to= "/contact"  className="btn" id="contact">Contact me</Link>
          </div>
        </div>
        <div className="social">
          <a href="https://slack.com" target="blank">
            <img src={slack} alt="" />
          </a>
          <a href="https://github.com" target="blank">
            <img src={github} alt="" />
          </a>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Profilepage;
