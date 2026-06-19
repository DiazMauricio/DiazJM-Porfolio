import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import "./WorkPage.css";
import { useSmoothScroll } from "../../Hooks/useSmoothScroll";
import Footer from "../Footer";

interface WorkPageProps {
  children: ReactNode; // ◄ Asignamos el tipo aquí
}

const WorkPage = ({ children }: WorkPageProps) => {
  const scrollContainerRef = useSmoothScroll();

  return (
    <div
      className="smooth-scroll-container"
      ref={scrollContainerRef}
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <div className="WorkPage">
        <div className="container">
          <div className="header">
            <Link to="/">
              <button>Volver</button>
            </Link>
          </div>
          {children}
          <Link to="/" className="nextButton">
            <button>Siguiente</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorkPage;
