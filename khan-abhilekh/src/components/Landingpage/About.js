import React from 'react';

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center p-6 bg-black text-white">
      {/* Heading */}
      <h1 className="text-4xl font-semibold mb-6">
        ABOUT US
      </h1>

      {/* Text Body */}
      <p className="text-base mb-6">
        <span className=" italic font-extrabold">Khan Abhilekh</span> is an innovative project aimed at revolutionizing coal mine management through a <br /> digital logbook solution. Our platform enhances safety, productivity, and compliance by streamlining shift <br /> handovers, real-time alerts, and maintenance schedules, empowering coal mines to operate efficiently <br /> while adhering to safety standards and best practices.
      </p>

      {/* Image */}
      <img src="/assets/about.png" alt="About Us" className="max-w-xl " />
    </section>
  );
};

export default About;
