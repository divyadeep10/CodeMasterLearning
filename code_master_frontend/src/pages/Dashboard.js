import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Dashboard() {
    const navigate = useNavigate(); // Initialize the navigate function

    const features = [
        { title: 'profile', description: 'View and edit your profile information.' },
        { title: 'Progress Tracker', description: 'Track your progress and completed challenges.' },
        { title: 'Coding Challenges', description: 'Attempt coding problems to improve your skills.' },
        { title: 'Leaderboard', description: 'Check your rank among other users.' },
        { title: 'Settings', description: 'Update your preferences and account settings.' },
    ];

    const handleGoToFeature = (title) => {
        const pathMap = {
            profile: '/profile',
            'Progress Tracker': '/progressDB',
            'Coding Challenges': '/challenges',
            Leaderboard: '/leaderboard',
            Settings: '/settings',
        };
    
        if (pathMap[title]) {
            navigate(pathMap[title]); // Navigate to the correct path
        } else {
            console.error(`Path for ${title} not defined`);
        }
    };
    

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white py-8">
            <h1 className="text-4xl font-bold mb-8">Welcome to the Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
                        <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
                        <p className="text-gray-400 mb-6">{feature.description}</p>
                        <button
                            onClick={() => handleGoToFeature(feature.title)} // Use the navigate function
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Go to {feature.title}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
