import { useState } from "react";
import "@fontsource/roboto";
import "./styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="regTitle">Registro de asistencia</h1>
      <h3 className="regSubTitle">
        Para registrar su asistencia, ingrese su cédula.
      </h3>
    </>
  );
}

export default App;
