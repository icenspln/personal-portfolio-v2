import "./header.css";

function Header({ header, id }) {
  return (
    <>
      <header id={id}>&lt; {header} /&gt;</header>
    </>
  );
}

export default Header;
