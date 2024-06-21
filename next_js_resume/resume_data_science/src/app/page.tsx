"use client";

import Head from 'next/head';
import { useState, useEffect } from 'react';
import SimpleTypingAnimation from '../components/SimpleTypingAnimation';

const Home = () => {
  const [showTypingAnimation, setShowTypingAnimation] = useState(false);

  const handleTypingComplete = () => {
    setShowTypingAnimation(true);
  };

  useEffect(() => {
    document.body.classList.add('home');
    return () => {
      document.body.classList.remove('home');
    };
  }, []);

  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/resume">Resume</a>
        <a href="/contact">Contact Me</a>
      </nav>

      <div className="page-content">
        <div className="white-box">
          <div className="typing-animation-wrapper">
            <SimpleTypingAnimation text="Hello World, welcome to my portfolio!" onComplete={handleTypingComplete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;