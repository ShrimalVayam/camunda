import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';
import ModelerPage from './pages/ModelerPage/ModelerPage';
import FrameworksPage from './pages/FrameworksPage/FrameworksPage';
import './App.css'

const App = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/modeler" element={<ModelerPage />} />
      <Route path="/frameworks" element={<FrameworksPage />} />
    </Routes>
  </Router>
);

export default App
