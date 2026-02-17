import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ChangeColor from "./pages/change-color.jsx";
import Counter from "./pages/counter.jsx";
import MoneyConverter from "./pages/money-converter.jsx";
import PasswordGenerator from "./pages/password-generator.jsx";
import Home from "./pages/home.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Sidebar from "./components/layout/Sidebar.jsx";

function App() {
  return (
    <Router>
    
     <main
          className="
            min-h-screen
            ml-64
            transition-all duration-300 ease-in-out
          "
        >
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/change-color" element={<ChangeColor />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/money-converter" element={<MoneyConverter />} />
      </Routes>
      </main>
    </Router>
  );
}

export default App;
