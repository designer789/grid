import Image from 'next/image';
import Intro from './Intro';

export default function Hero() {
  // Function to handle smooth scrolling with Lenis
  const scrollToSection = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    // Just update the hash - Lenis will handle the smooth scrolling
    window.location.hash = id;
  };
  
  return (
    <section className="relative min-h-screen pt-16 md:pt-20 lg:pt-24 bg-white flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/bg3.mp4" type="video/mp4" />
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-24 flex flex-col items-center text-center relative z-10">
        <div className="mb-6 sm:mb-8 md:mb-12">
          <Image 
            src="/favicon.png" 
            alt="Grid Logo" 
            width={120} 
            height={120} 
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" 
            priority
          />
        </div>
        <div className="max-w-5xl lg:max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight leading-tight sm:leading-none mb-8 sm:mb-10 md:mb-12">
            <span className="block mb-2 md:mb-3">Unleash Your Idle Power.</span>
            <span className="block">Farm the Future.</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12 md:mb-16">
            <a 
              href="#get-started"
              onClick={(e) => scrollToSection(e, 'get-started')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white font-medium rounded-lg text-base sm:text-lg transition-transform hover:scale-105 whitespace-nowrap inline-block"
            >
              Get Started
            </a>
            <a 
              href="https://grid.gitbook.io/docs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary text-primary font-medium rounded-lg text-base sm:text-lg transition-colors hover:bg-primary/5 whitespace-nowrap inline-block"
            >
              Documentation
            </a>
          </div>

          {/* Intro section */}
          <div className="mt-4 sm:mt-6 md:mt-8 w-full max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">
            <Intro />
          </div>
        </div>
      </div>
    </section>
  );
} 