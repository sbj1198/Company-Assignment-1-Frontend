import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Posts } from "./Posts";
import { Users } from "./Users";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
};
