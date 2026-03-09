import { useState } from "react";
import "./App.css";

// Importar componentes
import PantallaCategoria from "./components/PantallaCategoria";
import PantallaJuego from "./components/PantallaJuego";
import PantallaResultado from "./components/PantallaResultado";

export default function App() {
  const [pantalla, setPantalla] = useState("categorias"); // categorias | juego | resultado
  const [categoriaActual, setCategoriaActual] = useState(null);
  const [puntosFinales, setPuntosFinales] = useState(0);

  const handleSelect = (cat) => {
    setCategoriaActual(cat);
    setPantalla("juego");
  };

  const handleGameOver = (pts) => {
    setPuntosFinales(pts);
    setPantalla("resultado");
  };

  let contenido = null;

  if (pantalla === "categorias") {
    contenido = <PantallaCategoria onSelect={handleSelect} />;
  } else if (pantalla === "juego") {
    contenido = (
      <PantallaJuego
        categoria={categoriaActual}
        onVolver={() => setPantalla("categorias")}
        onGameOver={handleGameOver}
      />
    );
  } else {
    contenido = (
      <PantallaResultado
        puntos={puntosFinales}
        categoria={categoriaActual}
        onReintentar={() => setPantalla("juego")}
        onMenu={() => setPantalla("categorias")}
      />
    );
  }

  return (
    <>
      {contenido}
      <footer className="app-footer">
        Derechos de autor 2010 - 2026, idea34 Software. Todos los derechos reservados.
      </footer>
    </>
  );
}
