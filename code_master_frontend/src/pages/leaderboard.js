import React, { useEffect, useState } from "react";

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch leaderboard data
    async function fetchLeaderboard() {
      try {
        const response = await fetch("https://backend-master-cyan.vercel.app/api/leaderboard/getleaderboard"); // Adjust the path as per your backend setup
        const data = await response.json();
        if (data.success) {
          setLeaders(data.data);
        }
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchLeaderboard();
  }, []);

  if (loading) return <p>Loading leaderboard...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white py-8">
      <h1 className="text-4xl font-bold mb-8">Leaderboard</h1>
      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="border-b-2 border-gray-700">
              <th className="px-4 py-2">Rank</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Questions Solved</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((leader, index) => (
              <tr key={leader.userID._id} className="border-b border-gray-700">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{leader.userID.username}</td>
                <td className="px-4 py-2">{leader.questionsSolved}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
