import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CabinetPage from './pages/CabinetPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cabinet/:cabinetId" element={<CabinetPage />} />
      </Routes>
    </Router>
  );
}

export default App;