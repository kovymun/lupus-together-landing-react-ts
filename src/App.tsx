import About from "./components/About";
import Hero from "./components/Hero";
import JoinForm from "./components/JoinForm";
import Members from "./components/Members";
import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import UnderstandingLupus from "./components/UnderstandingLupus";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <UnderstandingLupus />
        <Stories />
        <Members />
        <JoinForm />
      </main>
    </>
  );
}

export default App;
