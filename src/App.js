import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import './styles/globals.css';
import TodoApp from "./pages/TODO/TodoApp";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFoundPage from "./pages/NotFound";

function App() {
    return (
        <Router basename="/React-TODO">
            <div className="app-wrapper">
                <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/todo" element={<TodoApp />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
