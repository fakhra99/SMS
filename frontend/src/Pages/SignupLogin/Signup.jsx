import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import FormFields from "../../Components/InputField/InputField.jsx";
import Button from "../../Components/buttons/Buttons.jsx";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:4041/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.ok) {
        // Store user data in local storage
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/login"); // Redirect to login page
      } else {
        // Handle errors (e.g., show error message)
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
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

        <Button>Signup</Button>
        <p className="w-full px-2 py-2 mb-4 border rounded">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-blue-500">Login here</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
