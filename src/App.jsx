import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import UserSignup from "./pages/signup/User-Signup/User-signup";
import BasicInfromation from "./pages/signup/Partner-Signup/Basic-Information";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route
          path="/partner-signup/basic+information"
          element={<BasicInfromation />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
