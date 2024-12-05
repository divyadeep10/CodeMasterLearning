import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProgressDB = () => {
  const [progress, setProgress] = useState(null);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (!userId) {
      console.error('User ID not found in localStorage.');
      return;
    }

    // Fetch progress on component mount
    const fetchProgress = async () => {
      try {
        const response = await axios.get(`https://backend-master-cyan.vercel.app/api/progress/getprogress/${userId}`);
        setProgress(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching progress:', error);
      }
    };

    fetchProgress();
  }, [userId]);

  if (!progress) {
    return <div>Loading progress...</div>;
  }

  const formattedDate = new Date(progress.lastSolvedDate).toLocaleDateString();

  // Determine bar widths (e.g., dynamic percentage)
  const maxQuestions = 100; // You can adjust this max value
  const maxStreak = 30; // Maximum days for streak animation
  const questionSolvedPercentage = Math.min((progress.questionsSolved / maxQuestions) * 100, 100);
  const streakPercentage = Math.min((progress.streak / maxStreak) * 100, 100);

  return (
    <div className="min-h-screen p-8 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Your Progress</h2>

        {/* Questions Solved */}
        <p className="mb-2">Questions Solved: {progress.questionsSolved}</p>
        <div className="w-full bg-gray-700 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${questionSolvedPercentage}%` }}
          ></div>
        </div>

        {/* Streak */}
        <p className="mt-6 mb-2">Streak: {progress.streak} days</p>
        <div className="w-full bg-gray-700 rounded-full h-4">
          <div
            className="bg-blue-500 h-4 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${streakPercentage}%` }}
          ></div>
        </div>

        {/* Last Solved Date */}
        <p className="mt-6">Last Solved: {formattedDate}</p>
      </div>
    </div>
  );
};

export default ProgressDB;
