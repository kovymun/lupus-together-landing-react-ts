import { Toaster } from "react-hot-toast";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import JoinForm from "./components/JoinForm";
import Members from "./components/Members";
import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import UnderstandingLupus from "./components/UnderstandingLupus";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            textAlign: "center",
            lineHeight: "1.8",
            backgroundColor: "var(--background-color)",
            color: "var(--text-color)",
          },
        }}
      ></Toaster>
      <Navbar />
      <main>
        <Hero />
        <About />
        <UnderstandingLupus />
        <Stories />
        <Members />
        <JoinForm />
        <Footer />
      </main>
    </>
  );
}

export default App;
