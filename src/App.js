import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./UI/Home/home";
import Navbar from "./UI/Navbar/navbar"; // Assuming you have a Navbar component
import style from "./App.module.css";
import ParticlesComponent from "./UI/Particle Background/ParticleBackground";

function App() {
    return (
        <Router>
            <div >
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />

                    {/* Add more routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
