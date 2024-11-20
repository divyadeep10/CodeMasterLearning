import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Navbar from './components/navBar';
import Modules from './pages/Modules';
import NotFound from './pages/NotFound'; // A fallback page for 404
import Profile from './pages/profile';

function App() {
    // Check if the user is authenticated by looking for the token in localStorage
    const isAuthenticated = localStorage.getItem('token');

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                
                {/* Protect the dashboard route, user must be authenticated */}
                <Route 
                    path="/dashboard" 
                    element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
                />

                <Route 
                    path="/profile" 
                    element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} 
                />
                
                <Route path="/modules/:language" element={<Modules />} />
                
                {/* Fallback route for unmatched paths */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
