import Footer from "../Component/Footer";
import "../Styles/contact.css"
function Contact (){
    const name ="Adekeye aishat"
    return(
        <div className="contact">
            <div className="center">
                <h1>Contact Me</h1>
                <p className="hi-msg">Hi there, Contact me to ask about anything you have in mind.</p>
                <div className="contact-form">
                    <div className="names">
                        <div className="contact-form-fname">
                            <label htmlFor="fname">First Name</label>
                            <input type="text" id="first_name" placeholder="Enter your first name" required/>
                        </div>
                        <div className="contact-form-lname">
                            <label htmlFor ="lname">Last Name</label>
                            <input type="text" id="last_name"  placeholder="Enter your last name" required/>
                        </div>
                    </div>
                    <div className="contact-form-email">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="yourname@email.com" required/>
                    </div>
                    <div className="contact-form-msg">
                        <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
                    </div>
                    <div className="contact-form-check">
                        <input type ="checkbox"/>
                        <label>You agree to providing your data to {name} who may contact you</label>
                    </div>
                    <button id="btn__submit">Send Message</button>
                </div>
            </div>
            {/*<Footer />*/}
        </div>
    )
}
export default Contact ;