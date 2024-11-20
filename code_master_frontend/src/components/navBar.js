import React from 'react';
import { Link , useNavigate} from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");
    const username = localStorage.getItem("username");


    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("username");
        navigate("/login"); // Redirect to login page after logout
        window.location.reload();
        };

    return (
        <nav className="bg-gray-900 p-4 text-gray-200 flex justify-between items-center shadow-lg">
            {/* Brand Name */}
            <Link to="/" className="text-2xl font-bold text-blue-400 px-4 hover:text-blue-500">
                CodeMaster
            </Link>

            {/* Navigation Links */}
            <div className="flex space-x-6">
                <Link 
                    to="/" 
                    className="px-4 py-2 rounded hover:bg-gray-700 transition duration-200"
                >
                    Home
                </Link>
                <Link 
                    to="/register" 
                    className="px-4 py-2 rounded hover:bg-gray-700 transition duration-200"
                >
                    Register
                </Link>
                {!userId ? (
                    <Link 
                        to="/login" 
                        className="px-4 py-2 rounded hover:bg-gray-700 transition duration-200"
                    >
                        Login
                    </Link>
                ) : (

                    <>
                    <span className="text-gray-400 px-4">Welcome, {username} (ID: {userId})</span>
                    <button onClick={handleLogout} className="px-4 py-2 rounded hover:bg-gray-700 transition duration-200">Logout</button>
                    </>
                )}
                <Link 
                    to="/dashboard" 
                    className="px-4 py-2 rounded hover:bg-gray-700 transition duration-200"
                >
                    Dashboard
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
