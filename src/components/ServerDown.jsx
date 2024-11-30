import React from 'react';

function ServerDown() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl p-8 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-600">Server Down</h1>
        <p className="text-lg mb-6">
          We're currently facing technical difficulties. Please try again later. We apologize for the inconvenience!
        </p>
        <p className="text-lg mb-6">
          For updates, you can visit our campus website by clicking the button below.
        </p>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => window.location.href = 'https://jntuh.ac.in'}
          >
            Visit JNTUH
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServerDown;

