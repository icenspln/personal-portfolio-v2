import "./home.css";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <>
      <main className="home">
        <div className="home--into">
          <div className="home--heading">
            <p>Hello</p>
            <p>I'm Yacine</p>
            <p>
              Front-end Dev<span className="switch">eloper</span>
            </p>
          </div>
          <div className="home--desc">
            <div className="bold">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Welcome to my PORTFOLIO")
                    .pauseFor(1000)
                    .start();
                }}
                options={{ loop: true }}
              />
            </div>
          </div>
        </div>
        <div className="home--port">
          <p title="PORT">PORT</p>
          <p title="FOLIO">FOLIO</p>
        </div>
      </main>
    </>
  );
}

export default Home;
