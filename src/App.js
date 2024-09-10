import "./style/App.css"
import HEADER from "./layout/Header.components";
import NAV from "./layout/Nav.components";
import MAIN from "./layout/Main.components";
import FOOTER from "./layout/Footer.components";
function App() {
  return (
    <div className="App">
      <div className="container">
        
        <HEADER></HEADER>
        <NAV></NAV>
        <MAIN></MAIN>
        <FOOTER></FOOTER>
      </div>
    </div>
  );
}

export default App;
