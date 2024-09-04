import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundColor: 'black',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `url('/assets/bg.jpg')`,
          backgroundSize: 'cover',
          opacity: 0.1,
        }}
      />
      <div className="flex items-center justify-center h-full">
        <div className="text-center text-white px-6 md:px-12">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Revolutionizing Safety <br />
            & <br />
            Productivity in 
            <span className="italic"> Coal Mines</span>
          </h1>

          {/* Sub Title */}
          <p className="text-base md:text-lg mb-6">
            Digital Shift Handover Log System and Safety Management Plan to Enhance Efficiency and Compliance
          </p>

          {/* Diamond Image */}
          <img
            src="/assets/diamond.png"
            alt="Diamond Icon" // Add alt text for accessibility
            className="mx-auto"
            style={{ maxWidth: '350px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;