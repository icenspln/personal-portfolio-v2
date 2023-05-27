import "./about.css";
import { Header } from "../../components";

function About() {
  return (
    <>
      <Header header="About Me" />
      <main id="about">
        <div className="about">
          <div className="about--info">
            <h3>D.Yacine</h3>
            <br />
            <p>
              I am a Self_taught programmer, <span>Front-end developer</span>, I
              have experice in building websites using React JS, Tailwind CSS
              and a lot more JS libraries and CSS frameworks. I'm also familier
              with Design software like Figma.
            </p>
          </div>
          <div className="about--skills">
            <p>
              I've spent the last two years learning the following technologies:
            </p>
            <div className="about--skills-icons">
              <img src="/tech-stack/html.svg" alt="HTML" />
              <img src="/tech-stack/css.svg" alt="CSS" />
              <img src="/tech-stack/js.svg" alt="JS" />
              <img src="/tech-stack/react.svg" alt="REACT" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
