import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App font-quickSand">
      <Header></Header>
      <Home></Home>

      <Footer></Footer>
    </div>
  );
}

export default App;
