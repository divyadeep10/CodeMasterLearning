import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const onLoginSubmit = async (data) => {
    try {
      const response = await fetch(`https://backend-master-cyan.vercel.app/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Login Successful!");
        console.log("Token:", result.token);
        
        // Save token and user data to localStorage
        localStorage.setItem("token", result.token);
        localStorage.setItem("userId", result.user.id);
        localStorage.setItem("username", result.user.username);
        
        // Redirect to dashboard
        window.location.href = "/dashboard"; // Or use React Router's `useNavigate` hook
      } else {
        alert(result.message || "Login failed!");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-200 p-6">
      <h1 className="text-3xl font-bold mb-8">Login</h1>
      <form
        onSubmit={handleSubmit(onLoginSubmit)}
        className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
          className="w-full p-3 rounded mb-4 bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
          className="w-full p-3 rounded mb-4 bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-bold transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
