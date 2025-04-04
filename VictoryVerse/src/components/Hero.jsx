import React from "react";
import herobg from '../assets/hero-bg.mp4'
import './Hero.css'

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
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to <span className="shimmer">VictoryVerse</span></h1>
        <p className="text-xl md:text-2xl">Revolutionizing event rewards with NFTs & Fan Tokens</p>
      </div>
    </div>
  );
};

export default Hero;
