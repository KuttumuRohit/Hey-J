import React from 'react';
import bots from './bots.png';

function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-center">Welcome to Hey J</h1>
        <p className="text-lg text-center mb-6">
        Engage with Hey J for instant responses! Just click on the chat icon at the bottom to start chatting with our chatbot. If you're interested in visiting our campus website, simply click the button below.
        </p>
        <div className="flex justify-center mb-6">
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mr-4"
            onClick={() => window.location.href = 'https://jntuh.ac.in'}
          >
            Visit JNTUH
          </button>
          
        </div>
        <div className="flex justify-center">
          <img 
            src={bots} 
            alt="Chatbot illustration" 
            className="w-80 h-auto rounded-lg cursor-pointer" 
            onClick={() => window.location.href = '/chatbot'} // Navigate to chatbot on click
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
