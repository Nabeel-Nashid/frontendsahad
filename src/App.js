import "./App.css";
import First from "./pages/first";
import Second from "./pages/second";
import { Container } from "reactstrap";
function App() {
  return (
    <div className="App">
      <Container>
        <First />
        <Second />
      </Container>
    </div>
  );
}

export default App;
