import React from "react";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AddEditUSer from "./Pages/AddEditUSer";
import UserInfo from "./Pages/UserInfo";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUser" element={<AddEditUSer />} />
        <Route path="/editUser/:id" element={<AddEditUSer />} />
        <Route path="/userInfo" element={<UserInfo />} />
      </Routes>
    </>
  );
}

export default App;
