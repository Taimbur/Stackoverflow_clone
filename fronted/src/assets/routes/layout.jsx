import React from "react";
import Home from "../../pages/Home";
import { Routes, Route } from "react-router-dom";
import Signup from "../../pages/Signup";
import Login from "../../pages/Login";
import Question from "../../pages/Question";
import Sidebar from "../../pages/Sidebar";
import Contact from "../../pages/Contact";
import Ask from "../../pages/Ask";
import Answer from "../../pages/answer";
const layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/question" element={<Question />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/ask" element={<Ask />} />
      <Route path="/answer/:id" element={<Answer />} />
    </Routes>
  );
};

export default layout;
