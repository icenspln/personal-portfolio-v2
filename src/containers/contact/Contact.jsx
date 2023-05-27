import "./contact.css";

import { Header } from "../../components";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
function Contact() {
  return (
    <>
      <Header header="Contact" id="contact" />
      <main className="contact">
        <div className="socials">
          <p>Lets get in touch </p>
          <div>
            <a href="https://www.instagram.com/niss_ay_e" target="blank">
              <BsInstagram />
            </a>
            <a href="https://github.com/icenspln" target="blank">
              <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/d-yacine" target="blank">
              <BsLinkedin />
            </a>
          </div>
        </div>
        <div className="email">
          <label htmlFor="email">Emails</label>
          <br />
          <a href="mailto:yacindjilali200@gmail.com">
            yacindjilali200@gmail.com
          </a>
          <br />
        </div>

        <div className="copy">Designed & Developed by D.Yacine</div>
      </main>
    </>
  );
}

export default Contact;
