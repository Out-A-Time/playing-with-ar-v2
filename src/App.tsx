import * as THREE from "three";
import * as React from "react";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Box from "./components/Box";
import AR from "./components/AR";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      {/* <Box /> */}
    </div>
  );
}

export default App;
