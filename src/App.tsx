import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
