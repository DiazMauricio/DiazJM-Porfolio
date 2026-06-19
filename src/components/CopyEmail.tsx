import { useCursor } from "../context/CursorContext";
import "./CopyEmail.css";

const CopyEmail = () => {
  const { setCursorType } = useCursor();

  return (
    <div className="CopyEmail">
      <p>Do none of these apply to you?</p>
      <button
        onMouseEnter={() => setCursorType("flecha")}
        onMouseLeave={() => setCursorType("default")}
      >
        Contact me directly
      </button>
    </div>
  );
};

export default CopyEmail;
