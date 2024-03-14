import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
