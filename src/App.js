
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import PetDetailsPage from './Pages/PetDetailsPage';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    
    <Router>
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pets/:id" element={<PetDetailsPage />} />
      </Routes>
    </ErrorBoundary>
  </Router>
    
  );
}

export default App;
