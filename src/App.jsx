import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Income from "./components/Income";
import Connect from "./components/Connect";
import Testimonials from "./components/Testimonials";
import Faqs from "./components/Faqs";
import Blog from "./components/Blog";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <Services />
      <Income />
      <Connect />
      <Testimonials />
      <Faqs />
      <Blog />
      <Card />
      <Footer />
    </>
  );
}

export default App;
