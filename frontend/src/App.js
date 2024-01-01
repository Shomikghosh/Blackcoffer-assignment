import './App.css';
import Main from './components/Dashboard/All.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Main/>} />
        <Route path="/" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
