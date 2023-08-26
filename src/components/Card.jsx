import React from "react";
import "./Card.css";
import Image from "../assets/card-img.jpg";
import MainContent from "./MainContent";
import Footer from "./Footer.jsx";


export default function Card() {
  return (
    <div className="card">
      <div className="img-container">
        <img className="card-img" src={Image} alt="" />
      </div>
      <MainContent />
      <Footer />
    </div>
  )
}