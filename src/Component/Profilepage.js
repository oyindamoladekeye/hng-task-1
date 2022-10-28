import "../Styles/profilepage.css";
import slack from "../images/slack.jpg";
import github from "../images/github.jpg";
import ZuriLogo from "../images/zuri-logo.jpg";
import IngressiveLogo from "../images/ingressive-logo.jpg";
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
            <p className="btn" id="twitterlink">
              <a href="https://twitter.com/pemisere16" target="blank">
                Twitter Link
              </a>
            </p>
            <p className="btn" id="btn_zuri">
              <a href="https://training.zuri.team/" target="blank">
                Zuri Team
              </a>
            </p>
            <p className="btn" id="books">
              <a href="https://books.zuri.team/" target="blank">
                Zuri Library
              </a>
            </p>
            <p className="btn" id="book_python">
              <a
                href="https://books.zuri.team/python-for-beginners?ref_id=Oyinda"
                target="blank"
              >
                Zuri Bookshop
              </a>
            </p>
            <p className="btn" id="pitch">
              <a href="https://background.zuri.team/" target="blank">
                Lets Check Your Coders
              </a>
            </p>
            <p className="btn" id="book_design">
              <a href="https://books.zuri.team/design-rules" target="blank">
                Grab Your Free Design Book
              </a>
            </p>
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
        <footer className="footer">
          <img src={ZuriLogo} alt="" className="zuri" />
          <p className="hng9">HNG Internship 9 Frontend Task</p>
          <img src={IngressiveLogo} alt="" className="g14" />
        </footer>
      </div>
    </div>
  );
};

export default Profilepage;
