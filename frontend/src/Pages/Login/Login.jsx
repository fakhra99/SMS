import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen  bg-white flex items-center justify-center">
      <form className="w-full  max-w-sm bg-white shadow-md rounded-md px-8 py-5 border border-gray-300">
        <h2 className="text-2xl font-medium text-center mb-6">Login</h2>
        <div className="mb-6">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Login
          </button>
          <a href="#" className="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-700">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;

