// import About from "./components/About";
import Hero from "./components/Hero";
import Members from "./components/Members";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* <About /> */}
        <Members />
      </main>
    </>
  );
}

export default App;
