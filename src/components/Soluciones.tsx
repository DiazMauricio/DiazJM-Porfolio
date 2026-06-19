import "./Soluciones.css";
import { useCursor } from "../context/CursorContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const Soluciones = () => {
  const [optionN, setOptionN] = useState(0);

  const contenidoVariants: Variants = {
    initial: {
      x: -150, // Entra desde la derecha (puedes usar px o "100%")
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 26 },
    },
    exit: {
      x: 40, // Desaparece desplazándose también hacia la derecha
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="contactoContainer">
      <h1 className="title">Tell me about you</h1>
      <div className="box">
        <div className="opciones">
          {SolucionesData.map((data: any, i: number) => {
            return (
              <Opcion
                key={data.problem}
                text={data.problem}
                active={optionN === i}
                onClick={() => {
                  setOptionN(i);
                }}
              />
            );
          })}
        </div>
        <div
          className="respuestaContainer"
          style={{ overflow: "hidden", position: "relative" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={optionN} // ◄ Crucial: Cambiar la key fuerza a Framer a ejecutar initial/exit
              variants={contenidoVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ width: "100%" }}
            >
              {SolucionesData[optionN].solution()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Soluciones;

interface OptionsProps {
  text: string;
  active: boolean;
  onClick(): void;
}

const Opcion = ({ text, active, onClick }: OptionsProps) => {
  const { setCursorType } = useCursor();

  return (
    <div
      className={"opcion " + (active && "active")}
      onClick={onClick}
      onMouseEnter={() => setCursorType("flecha")}
      onMouseLeave={() => setCursorType("default")}
    >
      {text}
    </div>
  );
};

const SolucionesData = [
  {
    problem: "Opcion 1",
    solution: () => (
      <div>
        <h2>Opcion 1</h2>
        <p className="text">
          (Basic information and habilities) Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. At risus volutpat in ac ultricies
          faucibus. Sit nisl dui amet at. Elementum ornare elementum justo
          lectus. Viverra pulvinar aliquam metus dui sit in vestibulum,
          consectetur at. Auctor at et aliquam magna. Enim enim massa neque, in
          euismod pellentesque convallis
        </p>
      </div>
    ),
  },
  {
    problem: "Basic information and habilities",
    solution: () => (
      <div>
        <h2>Opcion 2</h2>
        <p className="text">
          (Basic information and habilities) Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. At risus volutpat in ac ultricies
          faucibus. Sit nisl dui amet at. Elementum ornare elementum justo
          lectus. Viverra pulvinar aliquam metus dui sit in vestibulum,
          consectetur at. Auctor at et aliquam magna. Enim enim massa neque, in
          euismod pellentesque convallis
        </p>
      </div>
    ),
  },
  {
    problem: "Opcion 3",
    solution: () => (
      <div>
        <h2>Opcion 3</h2>
        <p className="text">
          (Basic information and habilities) Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. At risus volutpat in ac ultricies
          faucibus. Sit nisl dui amet at. Elementum ornare elementum justo
          lectus. Viverra pulvinar aliquam metus dui sit in vestibulum,
          consectetur at. Auctor at et aliquam magna. Enim enim massa neque, in
          euismod pellentesque convallis
        </p>
      </div>
    ),
  },
  {
    problem: "Opcion 4",
    solution: () => (
      <div>
        <h2>Opcion 4</h2>
        <p className="text">
          (Basic information and habilities) Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. At risus volutpat in ac ultricies
          faucibus. Sit nisl dui amet at. Elementum ornare elementum justo
          lectus. Viverra pulvinar aliquam metus dui sit in vestibulum,
          consectetur at. Auctor at et aliquam magna. Enim enim massa neque, in
          euismod pellentesque convallis
        </p>
      </div>
    ),
  },
  {
    problem: "Opcion 5",
    solution: () => (
      <div>
        <h2>Opcion 5</h2>
        <p className="text">
          (Basic information and habilities) Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. At risus volutpat in ac ultricies
          faucibus. Sit nisl dui amet at. Elementum ornare elementum justo
          lectus. Viverra pulvinar aliquam metus dui sit in vestibulum,
          consectetur at. Auctor at et aliquam magna. Enim enim massa neque, in
          euismod pellentesque convallis
        </p>
      </div>
    ),
  },
];
