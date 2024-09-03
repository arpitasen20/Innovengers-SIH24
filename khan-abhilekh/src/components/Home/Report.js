import React from 'react';

const Report = () => {
  // Array of images for the right side
  const rightImages = [
    '/assets/r (1).png',
    '/assets/r (2).png',
    '/assets/r (3).png',
    '/assets/r (4).png'
  ];

  return (
    <section className="flex flex-col items-center justify-center text-center pt-20 bg-black text-white pb-20">
      {/* Heading */}
      <h1 className="text-4xl font-semibold mb-6">
        RECENT COAL INDIA REPORTS
      </h1>
      <div className='pt-10'>
        {/* Report Content */}
        <div className="flex w-full ">
          {/* Left Image */}
          <div className="flex-shrink-0  md:w-1/2 lg:w-1/3 xl-1/4 sm:w-1/6 lg:1/2">
            <img 
              src="/assets/r.png" 
              alt="Left Report" 
              className="w-full h-auto"
            />
          </div>

          {/* Right Images */}
          <div className="flex flex-wrap justify-between w-full pr-40 ">
            {rightImages.map((src, index) => (
              <div key={index} className="w-1/2 p-2">
                <div className="relative group">
                  <img 
                    src={src} 
                    alt={`Right Report ${index + 1}`} 
                    className="w-full h-auto transition-transform transform group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Report;
