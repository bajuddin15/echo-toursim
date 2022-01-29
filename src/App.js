import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HomeScreen />
      <Footer />
    </div>
  );
}

export default App;
