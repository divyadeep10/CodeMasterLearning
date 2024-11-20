import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const [hovered, setHovered] = useState(false);

    const languages = [
        { name: 'Python', path: '/modules/python', description: 'Master Python fundamentals and solve beginner to advanced coding challenges.' },
        { name: 'C++', path: '/modules/cpp', description: 'Practice with data structures, algorithms, and efficient memory usage in C++.' },
        { name: 'C', path: '/modules/c', description: 'Dive into low-level programming, pointers, and memory management with C.' },
        { name: 'JavaScript', path: '/modules/javascript', description: 'Build a solid foundation in JavaScript with exercises on DOM manipulation and ES6+.' },
        { name: 'Java', path: '/modules/java', description: 'Learn core Java concepts, OOP principles, and multithreading through hands-on practice.' },
        { name: 'Ruby', path: '/modules/ruby', description: 'Explore Ruby syntax, object-oriented concepts, and scripting with interactive challenges.' }
    ];

    const handleCardClick = (path) => {
        navigate(path);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
            {/* Hero Section */}
            <section className="flex flex-col items-center py-16 bg-gradient-to-b from-gray-900 to-gray-800">
                <h1 className="text-5xl font-extrabold text-center mb-4 tracking-tight text-indigo-400">
                    Welcome to <span className="text-pink-500">CodeMaster</span>
                </h1>
                <p className="text-lg max-w-2xl text-center text-gray-300">
                    Sharpen your coding skills with interactive exercises across multiple languages.
                    Choose a language to start practicing!
                </p>
            </section>

            {/* About Section */}
            <section className="py-16 bg-gray-900">
                <h2 className="text-4xl font-bold text-center mb-8 text-pink-400">About CodeMaster</h2>
                <p className="text-lg max-w-4xl mx-auto text-center text-gray-400 mb-4">
                    CodeMaster empowers developers and students with an interactive learning platform.
                    Learn core concepts, tackle challenges, and build projects to solidify your knowledge.
                </p>
                <p className="text-lg max-w-4xl mx-auto text-center text-gray-400">
                    Our mission is to make programming accessible, engaging, and rewarding for everyone.
                </p>
            </section>

            {/* Language Cards Section */}
            <section className="py-16 bg-gray-800">
                <h2 className="text-4xl font-bold text-center mb-8 text-indigo-400">Practice by Language</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
                    
                    {languages.map((language) => (
                        <div
                            key={language.name}
                            className="bg-gray-700 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-600 cursor-pointer"
                            onClick={() => handleCardClick(language.path)}
                        >
                            <h3 className="text-2xl font-bold text-center mb-2 text-pink-500">{language.name}</h3>
                            <p className="text-gray-300 text-center">{language.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Coming Soon Section */}
            <section
                className="flex flex-col items-center py-16 bg-gray-800 relative overflow-hidden"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <h2 className="text-4xl font-bold mb-4 animate-fade-in text-indigo-400">More Features Coming Soon!</h2>
                <p className="text-lg text-center text-gray-300 max-w-lg animate-slide-up">
                    Stay tuned for more exciting updates and interactive modules to enhance your coding journey!
                </p>

                {/* Animated Backgrounds */}
                <div
                    className={`absolute w-72 h-72 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 transform transition-all duration-1000 ${
                        hovered ? 'scale-150' : 'scale-100'
                    }`}
                    style={{ top: '20%', left: '10%' }}
                ></div>
                <div
                    className={`absolute w-96 h-96 bg-gradient-to-r from-green-400 via-blue-400 to-indigo-500 rounded-full blur-3xl opacity-20 transform transition-all duration-1000 ${
                        hovered ? 'scale-125' : 'scale-100'
                    }`}
                    style={{ bottom: '10%', right: '10%' }}
                ></div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-gray-800">
                <h2 className="text-4xl font-bold text-center mb-8 text-indigo-400">What Our Users Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
                    <blockquote className="bg-gray-700 p-6 rounded-lg shadow-lg text-gray-300">
                        "CodeMaster transformed how I learn to code. The challenges are engaging and insightful!"
                        <span className="block text-gray-200 mt-4 font-bold">- Alex J.</span>
                    </blockquote>
                    <blockquote className="bg-gray-700 p-6 rounded-lg shadow-lg text-gray-300">
                        "The best platform for improving coding skills. Highly recommended!"
                        <span className="block text-gray-200 mt-4 font-bold">- Priya K.</span>
                    </blockquote>
                    <blockquote className="bg-gray-700 p-6 rounded-lg shadow-lg text-gray-300">
                        "From beginner to advanced, CodeMaster has challenges for everyone. It's a game-changer!"
                        <span className="block text-gray-200 mt-4 font-bold">- Michael R.</span>
                    </blockquote>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="flex flex-col items-center py-16 bg-gray-900 relative overflow-hidden">
                <h2 className="text-4xl font-bold text-center mb-4 text-pink-400">Get Started with CodeMaster</h2>
                <p className="text-lg text-center text-gray-300 max-w-lg mb-8">
                    Ready to enhance your coding skills? Join CodeMaster today and start your journey towards becoming a coding pro!
                </p>
                <button
                    className="bg-indigo-500 text-white py-3 px-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-indigo-600"
                    onClick={() => navigate('/register')}
                >
                    Sign Up Now
                </button>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 py-8">
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-bold text-gray-100 mb-4">Explore More</h3>
                    <ul className="flex space-x-6">
                        <li><a href="/about" className="text-gray-400 hover:text-gray-100">About Us</a></li>
                        <li><a href="/contact" className="text-gray-400 hover:text-gray-100">Contact</a></li>
                        <li><a href="/terms" className="text-gray-400 hover:text-gray-100">Terms of Service</a></li>
                        <li><a href="/privacy" className="text-gray-400 hover:text-gray-100">Privacy Policy</a></li>
                    </ul>
                </div>
                <p className="text-center text-gray-500 mt-4">© 2024 CodeMaster. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;