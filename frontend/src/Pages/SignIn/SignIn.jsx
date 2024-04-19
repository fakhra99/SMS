import React from 'react';
// import Input from '../../Components/InputField/Input';


const SignIn = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <form className="w-full max-w-sm bg-cyan-200 shadow-md rounded-md px-8 py-5 border border-gray-300">
        <h2 className="text-2xl font-medium text-center mb-6">Sign In</h2>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Entre your Email"
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
            SignIn
          </button>
          <a href="#" className="inline-block p-px align-baseline font-normal text-sm text-blue-500 hover:text-blue-700">
            ForgotPassword?
          </a>
        </div>
      </form>
    </div>
    
  );
};

export default SignIn;

