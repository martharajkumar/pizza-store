import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="about" element={<About />} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
