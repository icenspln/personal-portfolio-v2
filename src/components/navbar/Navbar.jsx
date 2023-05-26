import "./navbar.css";
import { BsGithub } from "react-icons/bs";

function Navbar() {
  return (
    <>
      <nav className="nav">
        <ul className="nav--list">
          <li className="nav--list-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav--list-item">
            <a href="#about">About</a>
          </li>
          <li className="nav--list-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav--list-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a href="https://github.com/icenspln/personal-portfolio-v2" target="blank" >
          <BsGithub className="nav--icon" />
        </a>
      </nav>
    </>
  );
}

export default Navbar;
