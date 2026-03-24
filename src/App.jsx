import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from "./pages/About";
import EducationExperience from "./pages/EducationExperience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Publications from "./pages/Publications";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<Navigate to="/" replace />} />
            <Route path="/education-experience" element={<EducationExperience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/publications" element={<Publications />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer theme="dark" />
      </div>
    </Router>
  );
};

export default App;
