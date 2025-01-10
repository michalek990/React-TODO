import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CssTechniques from './pages/CssTechniques';
import ReactHooks from './pages/ReactHooks';
import ApiData from './pages/ApiData';
import Optimization from './pages/Optimization';
import Animations from './pages/Animations';
import './styles/globals.css';
import TodoApp from "./pages/TODO/TodoApp";

function App() {
    return (
        <Router>
            <div className="app-wrapper">
                <Navbar />
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/css" element={<CssTechniques />} />
                        <Route path="/hooks" element={<ReactHooks />} />
                        <Route path="/api" element={<ApiData />} />
                        <Route path="/optimization" element={<Optimization />} />
                        <Route path="/animations" element={<Animations />} />
                        <Route path="/todo" element={<TodoApp />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
