import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import UserProfile from './components/UserProfile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="container">
      <h1>Welcome to QiA Test App</h1>
      <p>This is a test application for QiA (QA Inteligente Automatizado).</p>
      <div className="features">
        <div className="feature-card">
          <h3>🤖 Automated QA</h3>
          <p>AI-powered quality assurance testing</p>
        </div>
        <div className="feature-card">
          <h3>📸 Visual Testing</h3>
          <p>Automatic screenshot comparison</p>
        </div>
        <div className="feature-card">
          <h3>🔍 Code Review</h3>
          <p>Intelligent code analysis</p>
        </div>
      </div>
    </div>
  );
}

export default App;
// Test comment for QiA pipeline
