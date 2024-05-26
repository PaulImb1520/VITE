import { Route, Routes } from "react-router-dom";
import { OtherScreen, LoginScreen } from "../src/screns/index";

export const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/otherScreen" element={<OtherScreen />} />
    </Routes>
  );
};
