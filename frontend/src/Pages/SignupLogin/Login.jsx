import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import FormFields from "../../Components/InputField/InputField.jsx";
import Button from "../../Components/buttons/Buttons.jsx";

const Login = ({ onLogin }) => {
  // Added onLogin prop
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 const handleSubmit = async (e) => {
   e.preventDefault();

   const userData = {
     email,
     password,
   };

   try {
     const response = await fetch("http://localhost:4041/api/signin", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(userData),
     });

     if (response.ok) {
       const data = await response.json();
       console.log("API Response Data:", data); // Log the entire response data

       localStorage.setItem("user", JSON.stringify(data.user)); // Save only user data

       const user = data.user; // Extract the user object
       console.log("User ID:", user._id);
       console.log("User Role:", user.role);

       onLogin(user.role);
       navigate("/home");
     } else {
       const errorMessage = await response.text();
       console.error("Error:", errorMessage);
       alert(errorMessage);
     }
   } catch (error) {
     console.error("Error:", error);
     alert("An error occurred while processing your request.");
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
        <h2 className="text-2xl mb-8">Login</h2>
        <FormFields
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          label="Email Address"
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
          <Link to="/">
            <span className="text-blue-500">Signup here</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
