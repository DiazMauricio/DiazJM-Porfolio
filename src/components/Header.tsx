import BounceBall from "./BounceBall";
import { motion } from "framer-motion";
import "./Header.css";
import Dizmauri from "./Icons/Dizmauri";
import Logo from "./Logo";
import IconBar from "./IconBar";

const Header = () => {
  return (
    <div className="Header">
      <BounceBall />
      <div className="InfoContainer">
        <div className="InfoContainer-c1">
          <Logo />
          <Subtitle />
          <p>
            Lorem ipsum dolor sit amet, consectetur dipiscing elit. Duis lacus,
            pretium lectus interdum turpis id. t sagittis.
          </p>
          <Dizmauri />
          <IconBar />
        </div>
      </div>
    </div>
  );
};

export default Header;

const Subtitle = () => {
  const size = 30;
  return (
    <div
      className="Subtitle"
      style={{ overflow: "hidden", height: size + "px" }}
    >
      <motion.div
        animate={{
          // Mapeamos las posiciones en el eje Y por cada palabra (0px, -40px, -80px, -120px...)
          // Duplicamos los valores seguidos para generar la "pausa" visual en esa posición
          y: [
            0,
            0,
            -size,
            -size,
            -size * 2,
            -size * 2,
            -size * 3,
            -size * 3,
            0,
          ],
        }}
        transition={{
          duration: 8, // Duración total de la secuencia completa
          repeat: Infinity, // Bucle infinito
          ease: "easeInOut",
          times: [0, 0.2, 0.25, 0.6, 0.65, 0.9, 0.95, 0.95, 0.95], // Tiempos porcentuales del loop
        }}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <p className="subtitleText" style={{ height: size + "px" }}>
          UI Designer
        </p>
        <p className="subtitleText" style={{ height: size + "px" }}>
          FrontEnd Developer
        </p>
        <p className="subtitleText" style={{ height: size + "px" }}>
          Community Manager
        </p>
        <p className="subtitleText" style={{ height: size + "px" }}>
          UI Designer
        </p>
        {/* Clon para el reset */}
      </motion.div>
    </div>
  );
};
