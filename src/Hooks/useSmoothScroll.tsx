import { useRef, useEffect } from "react";
import { animate } from "framer-motion";

export const useSmoothScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTarget = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const sectionHeight = window.innerHeight / 4;

      if (e.deltaY > 0) {
        // Rueda hacia abajo
        scrollTarget.current = Math.min(
          scrollTarget.current + sectionHeight,
          container.scrollHeight - sectionHeight,
        );
      } else {
        // Rueda hacia arriba
        scrollTarget.current = Math.max(
          scrollTarget.current - sectionHeight,
          0,
        );
      }

      // 3. Animamos el scroll del contenedor con la física de resortes de Framer Motion
      animate(container.scrollTop, scrollTarget.current, {
        type: "spring",
        stiffness: 90, // Menor rigidez = más elástico y flotante
        damping: 20, // Amortiguación para evitar rebotes exagerados
        mass: 1.5, // Peso/inercia del scroll
        onUpdate: (latest) => {
          container.scrollTop = latest; // Sincroniza la propiedad de scroll real del elemento
        },
      });
    };

    // Es obligatorio usar { passive: false } para poder ejecutar e.preventDefault()
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // Devolvemos la referencia para engancharla al contenedor en el componente
  return containerRef;
};
