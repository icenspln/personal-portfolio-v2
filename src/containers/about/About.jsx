import "./about.css";

import { Header } from "../../components";
import yacine from "../../assets/yacine.png"

function About() {
  return (
    <>
      <Header header="About" />
      <main id="about">
        <div className="about about--secondary">
          <div className="about--info">
            <h3>D.Yacine</h3>
            <br />
            <p>
              I am a <span>Self_taught programmer,</span> Front-end developer & UI UX designer, I have experice in building websites using React JS, Tailwind CSS and a lot more JS libraries and CSS frameworks.
              I'm also familier with Design software like Figma.
            </p>
          </div>
          <div className="about--image">
            <img src={yacine} alt="😎" />
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
