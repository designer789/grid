import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
          {/* Logo and description */}
          <div className="col-span-2 sm:col-span-2 mb-2 sm:mb-0">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Image 
                src="/favicon.png" 
                alt="Grid Logo" 
                width={32} 
                height={32} 
                className="w-8 h-8 sm:w-10 sm:h-10 brightness-0 invert" 
              />
              <span className="text-xl sm:text-2xl font-bold">Grid</span>
            </div>
            <p className="text-white/80 text-sm sm:text-base max-w-md mb-4 sm:mb-6">
              Unleash Your Idle Power. Farm the Future. 
            </p>
          </div>
          
          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-4">Quick Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 text-sm sm:text-base">
              <Link href="#features" className="text-white/80 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#ecosystem" className="text-white/80 hover:text-white transition-colors">
                Ecosystem
              </Link>
              <Link href="#tokenomics" className="text-white/80 hover:text-white transition-colors">
                Tokenomics
              </Link>
              <Link href="#roadmap" className="text-white/80 hover:text-white transition-colors">
                Roadmap
              </Link>
              <Link href="#faq" className="text-white/80 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="#get-started" className="text-white/80 hover:text-white transition-colors">
                Get Started
              </Link>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="col-span-1">
            <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-4">Connect With Us</h3>
            <div className="grid grid-cols-4 gap-2">
              <a 
                href="https://x.com/Grid_SOL_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
                  <FontAwesomeIcon 
                    icon={faXTwitter} 
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform hover:scale-110" 
                  />
                </div>
              </a>
              <a 
                href="https://t.me/Grid_Official" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Telegram"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
                  <FontAwesomeIcon 
                    icon={faTelegram} 
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform hover:scale-110" 
                  />
                </div>
              </a>
              <a 
              
                className="text-white/80 hover:text-white transition-colors"
                aria-label="DexTools"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
                  <Image 
                    src="/dextools.svg" 
                    alt="DexTools" 
                    width={20} 
                    height={20}
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform hover:scale-110 invert" 
                  />
                </div>
              </a>
              <a 
               
                className="text-white/80 hover:text-white transition-colors"
                aria-label="DexScreener"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
                  <Image 
                    src="/dex-screener.svg" 
                    alt="DexScreener" 
                    width={20} 
                    height={20}
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform hover:scale-110 invert" 
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-white/20 my-6 sm:my-8"></div>
        
        {/* Copyright */}
        <div className="flex justify-center items-center text-white/70 text-xs sm:text-sm">
          <p>&copy; {currentYear} Grid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 