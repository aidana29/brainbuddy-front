import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login"
import Welcome from "./pages/Welcome"
import SignUp from "./pages/SignUp"
import Main from "./pages/Main"
import PrivateRoutes from "./components/PrivateRoutes"

function Router() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route element={<PrivateRoutes />}>
        <Route path="/main" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
