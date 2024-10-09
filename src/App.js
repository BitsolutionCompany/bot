import "./style/App.css"
import HEADER from "./layout/Header.components";
import FOOTER from "./layout/Footer.components";


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HOME from './pages/Home';
import EMPRESA from './pages/Empresa';
import CONTATO from './pages/Contato';
import COMOVENDER from "./pages/Vender";
import CADASTRO from "./pages/Cadastro";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <HEADER></HEADER>
          <Routes>
              <Route path="/" exact element={<HOME />} />
              <Route path="/empresa" element={<EMPRESA />} />
              <Route path="/contato" element={<CONTATO />} />
              <Route path="/vender" element={<COMOVENDER />} />
              <Route path="/cadastro" element={<CADASTRO />} />
          </Routes>
        </Router>
        <FOOTER></FOOTER>
      </div>
    </div>
  );
}

export default App;
