import "./App.css";

import { Home, About, Projects, Contact } from "./containers";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <main className="container">
        <Navbar />
        <Home />
        <About />
      </main>
      <Projects />
      <main className="container">
        <Contact />
      </main>
    </>
  );
}

export default App;
