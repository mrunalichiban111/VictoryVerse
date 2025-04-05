import React from "react";
import herobg from '../assets/hero-bg.mp4'
import './Hero.css'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={herobg}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay (optional, to make text pop) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4 mt-5">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to <span className="shimmer">VictoryVerse</span></h1>
        <p className="text-xl md:text-2xl">Revolutionizing event rewards with NFTs & Fan Tokens</p>
        <br />
        <br />
        {/* BUTTON */}
        <Link to='/create'>
        <button className="relative inline-block px-8 py-3 font-semibold text-white rounded-xl group transition-all duration-300 overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 hover:scale-105 hover:shadow-2xl">
          <span className="absolute inset-0 w-full h-full transition-transform duration-500 ease-out transform translate-x-full group-hover:translate-x-0 bg-white opacity-10 blur-xl"></span>
          <span className="relative z-10">Create Event </span>
        </button>
        </Link>
      </div>  
    </div>
  );
};

export default Hero;
