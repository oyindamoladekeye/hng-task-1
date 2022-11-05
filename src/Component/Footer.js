import ZuriLogo from "../images/zuri-logo.jpg";
import IngressiveLogo from "../images/ingressive-logo.jpg";

function Footer (){
    return (
        <footer className="footer">
            <img src={ZuriLogo} alt="" className="zuri" />
            <p className="hng9">HNG Internship 9 Frontend Task</p>
            <img src={IngressiveLogo} alt="" className="g14" />
        </footer>
    )
}

export default Footer ;