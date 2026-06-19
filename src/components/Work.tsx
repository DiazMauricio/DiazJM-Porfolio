import { Link } from "react-router-dom";
import { useMousePosition } from "../Hooks/useMousePosition";
import { useCursor } from "../context/CursorContext";
import "./Work.css";

interface WorkProps {
  urlLink: string;
  bgColor?: string;
}

const Work = ({ urlLink, bgColor = "#f2bf31" }: WorkProps) => {
  const { setCursorType } = useCursor();
  const { x, y, bind } = useMousePosition(20);

  return (
    <div
      className="Work"
      {...bind}
      style={
        {
          "--bg-color": bgColor,
        } as React.CSSProperties
      }
    >
      <div className="ContentContainer">
        <div className="TitleContainer">
          <h1>Work 1</h1>
          <h5>Branding, ilustración</h5>
        </div>
        <div className="ImageContainer">
          <Link
            to={urlLink}
            onMouseEnter={() => setCursorType("verMas")}
            onMouseLeave={() => setCursorType("default")}
            onClick={() => setCursorType("default")}
          >
            <img
              style={{ transform: `translate(${x}px, ${y}px)` }}
              src="https://www.infobae.com/resizer/v2/Y4RYX6GVBNHQXH24ZONS2P5SKU.png?auth=81caa94a7541f1f8a7bc2bcd9e91e228a62ed2feee4c38a123badddfcf2b9b21&smart=true&width=992&height=554&quality=85"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work;
