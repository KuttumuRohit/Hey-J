import React from 'react';

function Features() {
  const features = [
    { title: "Academics", description: "Get information about R22 guidelines, departments, faculty details, and everything about the campus from timetables to faculty details." },
    { title: "Location", description: "Find each and every location including departments, canteen, hostels, and emergency services locations." },
    { title: "Events", description: "Stay updated about events on campus and events organized by clubs." }
  ];

  return (
    <section className="grid gap-8 md:grid-cols-3 p-10 max-w-6xl mx-auto">
      {features.map((feature, index) => (
        <div key={index} className="bg-white shadow-md rounded-md p-6 text-center hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-green-600 mb-4">{feature.title}</h2>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
