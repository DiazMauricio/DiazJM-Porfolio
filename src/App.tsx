import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Work from "./components/Work";
import "./App.css";
import { useSmoothScroll } from "./Hooks/useSmoothScroll";

function App() {
  const scrollContainerRef = useSmoothScroll();

  return (
    <div
      className="smooth-scroll-container"
      ref={scrollContainerRef}
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowY: "scroll",
      }}
    >
      <Header />
      <Work urlLink="/Tama" bgColor="#7446b9" />
      <Work urlLink="/Tama" bgColor="#3b48a2" />
      <Work urlLink="/Tama" bgColor="#ac4848" />
      <Work urlLink="/Tama" bgColor="#a5873b" />
      <About />
      <Footer />
    </div>
  );
}

export default App;
