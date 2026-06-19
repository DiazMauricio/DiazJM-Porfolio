import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "../context/CursorContext";

// interface CustomCursorProps {
//   cursorType: string;
// }

const CustomCursor = () => {
  const { cursorType } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Usamos Motion Values con Springs para que el movimiento sea ultra fluido
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 1000, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isVisible, cursorX, cursorY]);

  // Variantes de animación para los diferentes estados de Hover
  const variants = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: "#000000",
      translateX: "-50%",
      translateY: "-50%",
      borderRadius: "50% 50% 50% 50%",
    },
    verMas: {
      width: 90,
      height: 90,
      backgroundColor: "#000000",
      translateX: "-50%",
      translateY: "-50%",
    },
    copiar: {
      width: 90,
      height: 40,
      backgroundColor: "#000000",
      translateX: "0%",
      translateY: "0%",
      transformOrigin: "0 0",
      borderRadius: "6px 25px 25px 25px",
    },
    copiado: {
      width: 90,
      height: 40,
      backgroundColor: "#f2554b",
      translateX: "0%",
      translateY: "0%",
      transformOrigin: "0 0",
      borderRadius: "6px 25px 25px 25px",
    },
    flecha: {
      width: 30,
      height: 30,
      backgroundColor: "#000000",
      translateX: "-50%",
      translateY: "-50%",
    },
  };

  return (
    <motion.div
      className="custom-cursor"
      variants={variants}
      animate={{
        ...variants[cursorType as keyof typeof variants],
        scale: isClicked ? 0.85 : 1,
      }}
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
        opacity: isVisible ? 1 : 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        scale: isClicked ? 0.2 : 1,
      }}
    >
      {cursorType === "default" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.2 }}
          style={{
            width: 4,
            height: 4,
            backgroundColor: "#E5A443",
            borderRadius: "50%",
          }}
        />
      )}
      {/* Animamos la aparición del texto solo cuando está en modo verMas */}
      {cursorType === "verMas" && (
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.2 }}
          style={{
            color: "#fff",
            fontFamily: "'Poppins', sans-serif", // Ajustado a la tipografía de tus SVGs
            fontSize: "12px",
            fontWeight: "bold",
            letterSpacing: "0.1em",
            whiteSpace: "nowrap",
          }}
        >
          VER MÁS
        </motion.span>
      )}
      {cursorType === "copiar" && (
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.2 }}
          style={{
            color: "#fff",
            fontFamily: "'Poppins', sans-serif", // Ajustado a la tipografía de tus SVGs
            fontSize: "12px",
            fontWeight: "bold",
            letterSpacing: "0.1em",
            whiteSpace: "nowrap",
          }}
        >
          COPIAR
        </motion.span>
      )}
      {cursorType === "copiado" && (
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.2 }}
          style={{
            color: "#fff",
            fontFamily: "'Poppins', sans-serif", // Ajustado a la tipografía de tus SVGs
            fontSize: "12px",
            fontWeight: "bold",
            letterSpacing: "0.1em",
            whiteSpace: "nowrap",
          }}
        >
          COPIADO
        </motion.span>
      )}
      {cursorType === "flecha" && (
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.2 }}
          style={{
            color: "#fff",
            fontFamily: "'Poppins', sans-serif", // Ajustado a la tipografía de tus SVGs
            fontSize: "12px",
            fontWeight: "bold",
            letterSpacing: "0.1em",
            whiteSpace: "nowrap",
          }}
        >
          →
        </motion.span>
      )}
    </motion.div>
  );
};

export default CustomCursor;
