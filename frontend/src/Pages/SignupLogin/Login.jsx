import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormFields from "../../Components/InputField/InputField.jsx";
import Button from "../../Components/buttons/Buttons.jsx";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Username:", username);
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
        <h2 className="text-2xl mb-8">Login</h2>

        <FormFields
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          label="User Name"
          required
        />

        <FormFields
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          label="Password"
          required
        />

        <Button>Login</Button>
        <p className="w-full px-2 py-2 mb-4 border rounded">
          Don`t have an account already?{" "}
          <Link to="/signup">
            <span className="text-blue-500">Signup here</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
