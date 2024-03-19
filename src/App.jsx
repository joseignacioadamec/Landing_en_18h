import { Container } from "react-bootstrap";
import { Header } from "./components/Header/Header";
import { ComponentSettings } from "./components/ComponentSettings/ComponentSettings";
import { ComponentInfo } from "./components/ComponentInfo/ComponentInfo";
import Formulary from "./components/Formulary/Formulary";
import { ComponentOptions } from "./components/ComponentOptions/ComponentOptions";
import { ComponentFooter } from "./components/ComponentFooter/ComponentFooter";

function App() {
  return (
    <>
      <Container fluid className="p-0" style={{ maxWidth: "1440px" }}>
        <Header />
        <ComponentSettings />
        <ComponentInfo />
        <ComponentOptions />
        <Formulary />
        <ComponentFooter />
      </Container>
    </>
  );
}

export default App;
