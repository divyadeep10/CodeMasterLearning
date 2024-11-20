import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/auth/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
          setUsername(userData.username);
          setEmail(userData.email);
        } else {
          console.error('Failed to fetch user profile');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/auth/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ username, email }),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUser(updatedUser.user);
        setMessage('Profile updated successfully!');
      } else {
        setMessage('Failed to update profile.');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage('An error occurred while updating the profile.');
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="min-h-screen p-8 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Profile Overview</h1>
      <form onSubmit={handleUpdateProfile} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
        >
          Update Profile
        </button>
      </form>
      {message && <p className={`mt-4 ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
    </div>
  );
};

export default Profile;
