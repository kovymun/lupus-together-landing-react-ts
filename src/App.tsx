import About from "./components/About";
import Hero from "./components/Hero";
import Members from "./components/Members";
import Navbar from "./components/Navbar";
import Stories from "./components/Stories";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stories />
        <Members />
      </main>
    </>
  );
}

export default App;
