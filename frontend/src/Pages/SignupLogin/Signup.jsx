import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormFields from "../../Components/Input_Field/Input_Field"; // Adjust the import path accordingly

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle signup logic here, such as sending data to server
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1494949649109-ecfc3b8c35df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D')",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-80 rounded-lg p-8 w-96"
      >
        <h2 className="text-2xl mb-8">Signup</h2>

        <FormFields
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label="Username"
        />

        <FormFields
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
        />

        <FormFields
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
        />

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
        >
          Signup
        </button>
        <p className="w-full px-2 py-2 mb-4 border rounded">
          Already have an account?{" "}
          <Link to="/signup">
            <span className="text-blue-500">Login here</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
