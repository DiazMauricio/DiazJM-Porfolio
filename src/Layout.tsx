import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useLocation, useOutlet } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import { CursorProvider } from "./context/CursorContext";

const Layout = () => {
  const location = useLocation();
  const outlet = useOutlet();

  // Variantes para la expansión circular en el centro de la pantalla
  const pageVariants: Variants = {
    initial: {
      clipPath: "circle(0% at 50vw 50vh)",
    },
    animate: {
      clipPath: "circle(150% at 50vw 50vh)",
      transition: {
        duration: 0.85,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };
  return (
    <>
      <CursorProvider>
        <CustomCursor />

        <AnimatePresence mode="popLayout">
          <motion.main
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              minHeight: "100vh",
              maxWidth: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {outlet}
          </motion.main>
        </AnimatePresence>
      </CursorProvider>
    </>
  );
};

export default Layout;
