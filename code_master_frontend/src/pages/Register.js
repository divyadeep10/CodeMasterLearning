import React from "react";

const SignUpForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      const response = await fetch(
        `http://localhost:4000/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("User Registered Successfully!");
        console.log("Success:", result);
      } else {
        alert(result.message || "Registration failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Main Container */}
      <div className="bg-white shadow-md rounded-lg flex max-w-4xl overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 bg-blue-500 text-white flex flex-col justify-center items-center p-8">
          <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
          <p className="text-lg">
            Join our platform and experience personalized features and
            seamless interactions.
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                placeholder="Enter your username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
