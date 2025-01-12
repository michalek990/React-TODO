import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CssTechniques from './pages/Learn/CssTechniques';
import ReactHooks from './pages/Learn/ReactHooks';
import ApiData from './pages/Learn/ApiData';
import './styles/globals.css';
import TodoApp from "./pages/TODO/TodoApp";

function App() {
    return (
        <Router>
            <div className="app-wrapper">
                <Navbar />
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/css" element={<CssTechniques />} />
                        <Route path="/hooks" element={<ReactHooks />} />
                        <Route path="/api" element={<ApiData />} />
                        <Route path="/todo" element={<TodoApp />} />
                    </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
