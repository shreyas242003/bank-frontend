import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, suspense } from "react";
const Login = lazy(() => import("./pages/auth/login"));
import viteLogo from "/vite.svg";
import Home from "./pages/home/home";
import Signup from "./pages/auth/signup";
import Dashboard from "./pages/dashboard/dashboard";
import Loan from "./pages/Loans/loan";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Dashboard />} />
        <Route path="/loan-page" element={<Loan />} />
      </Routes>
    </>
  );
}

export default App;
