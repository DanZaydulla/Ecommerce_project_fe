import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import LoginPage from './pages/LoginPage';
import FavoritePage from './pages/FavoritePage';
import OrderPage from  './pages/OrderPage';


function App() {
  return (
    
    <BrowserRouter>
      <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/order" element={<OrderPage />}/>
          <Route path="/favorite" element={<FavoritePage />} />

        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;



