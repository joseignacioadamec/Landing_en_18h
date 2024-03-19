import Alert from "react-bootstrap/Alert";

export const AlertComponent = () => {
  return (
    <div className="alert-container">
      <Alert variant="success" className="alert">
        Mensaje enviado exitosamente
      </Alert>
    </div>
  );
};
