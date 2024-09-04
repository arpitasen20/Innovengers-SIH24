import React from 'react';

const Features = () => {
  // Array of image sources
  const images = [
    '/assets/f (1).png',
    '/assets/f (2).png',
    '/assets/f (3).png',
    '/assets/f (4).png',
    '/assets/f (5).png',
    '/assets/f (6).png',
    '/assets/f (7).png',
    '/assets/f (8).png'
  ];

  return (
    <section className="flex flex-col items-center justify-center text-center p-6 bg-black text-white">
      {/* Heading */}
      <h1 className="text-4xl font-semibold mb-6">
        FEATURES
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative group">
            <img 
              src={src} 
              alt={`Feature ${index + 1}`} 
              className="w-full h-auto transition-transform transform group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
