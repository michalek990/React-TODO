import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import './styles/globals.css';
import TodoApp from "./pages/TODO/TodoApp";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
    return (
        <Router basename="/React-TODO">
            <div className="app-wrapper">
                <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/todo" element={<TodoApp />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
