import { useState } from "react";
import type { MouseEvent } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export const useMousePosition = (range: number = 20) => {
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();

    // Posición del cursor relativa al elemento
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalizamos con centro en (0,0) -> de -0.5 a 0.5
    const normalizedX = x / rect.width - 0.5;
    const normalizedY = y / rect.height - 0.5;

    // Mapeamos al rango deseado (multiplicamos por el doble del rango)
    const finalX = Math.round(normalizedX * (range * 2));
    const finalY = Math.round(normalizedY * (range * 2));

    setMousePos({ x: finalX, y: finalY });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Devolvemos el estado y los listeners empaquetados
  return {
    x: mousePos.x,
    y: mousePos.y,
    bind: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
  };
};
