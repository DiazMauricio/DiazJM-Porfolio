import "./Footer.css";
import LogoPlano from "./Icons/LogoPlano";
import { useCursor } from "../context/CursorContext";
import IconBar from "./IconBar";

const Footer = () => {
  const { setCursorType } = useCursor();

  const handleClick = () => {
    try {
      navigator.clipboard.writeText("diazjmauricio95@gmail.com");
      setCursorType("copiado");
    } catch (err) {
      console.error("Error al copiar al portapapeles: ", err);
    }
  };
  return (
    <div className="Footer">
      <div className="container">
        <div className="column">
          <h2>Contacto</h2>
          <p>
            If you want to collaborate on crafting amazing experience for people
            – you are very welcome to contact me.
          </p>
          <p
            className="email"
            onMouseEnter={() => setCursorType("copiar")}
            onMouseLeave={() => setCursorType("default")}
            onClick={handleClick}
          >
            diazjmauricio95@gmail.com
          </p>
          <IconBar />
        </div>
        <div className="column" />

        <div className="column">
          <LogoPlano />
        </div>
      </div>
    </div>
  );
};

export default Footer;
