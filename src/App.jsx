import "./App.css";

import { Home, About, Projects, Contact } from "./containers";
import { Navbar } from "./components";

function App() {
  return (
    <div id="home">
      <main className="container">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
