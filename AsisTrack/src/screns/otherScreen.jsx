import { useNavigate } from "react-router-dom";
import { Button } from "rsuite";

export const OtherScreen = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <>
      <h1>Esta es la otra página</h1>
      <Button onClick={handleNavigate} appearance="primary">
        Regresar
      </Button>
    </>
  );
};
