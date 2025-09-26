import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      
      const res = await axios.post(
        "https://portfolio-tfly.onrender.com/api/admin/login", 
        { email, password }
      );

      console.log("Login response:", res.data); 

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("admin", JSON.stringify(res.data.admin));

      navigate("/admin"); 
    } catch (err) {
      alert(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-darkbg text-primary">
      <form
        onSubmit={handleLogin}
        className="bg-black p-6 rounded-xl shadow-md w-96 space-y-4 border border-primary"
      >
        <h1 className="text-2xl font-bold">Admin Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded bg-darkbg text-primary"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded bg-darkbg text-primary"
        />
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </section>
  );
}
