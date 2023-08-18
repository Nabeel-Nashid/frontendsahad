import "./App.css";
import First from "./pages/first";
import Second from "./pages/second";
import { Container } from "reactstrap";
import Third from "./pages/third";
import Fourth from "./pages/fourth";
function App() {
  return (
    <div className="App">
      <Container >
        <First />
        <Second />
        <Third />
        <Fourth />
      </Container>
    </div>
  );
}

export default App;
