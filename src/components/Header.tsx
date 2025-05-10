import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    // The actual scrolling is now handled by Lenis through the hash link click handler
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 py-4 transition-colors duration-300 ${scrolled ? 'bg-white' : 'bg-transparent'}`}>
      <style jsx global>{`
        .icon-link:hover .custom-svg {
          color: #00714B;
        }
      `}</style>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/favicon.png" 
            alt="Grid Logo" 
            width={32} 
            height={32} 
            className="w-8 h-8" 
            priority
          />
          <span className="text-3xl font-bold">Grid</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <nav className="flex space-x-6 mr-8">
            <a 
              href="#features" 
              onClick={(e) => scrollToSection(e, 'features')} 
              className="font-medium hover:text-primary transition-colors"
            >
              Features
            </a>
            <a 
              href="#get-started" 
              onClick={(e) => scrollToSection(e, 'get-started')} 
              className="font-medium hover:text-primary transition-colors"
            >
              Get Started
            </a>
            <a 
              href="#ecosystem" 
              onClick={(e) => scrollToSection(e, 'ecosystem')} 
              className="font-medium hover:text-primary transition-colors"
            >
              Ecosystem
            </a>
            <a 
              href="#tokenomics" 
              onClick={(e) => scrollToSection(e, 'tokenomics')} 
              className="font-medium hover:text-primary transition-colors"
            >
              Tokenomics
            </a>
            <a 
              href="#roadmap" 
              onClick={(e) => scrollToSection(e, 'roadmap')} 
              className="font-medium hover:text-primary transition-colors"
            >
              Roadmap
            </a>
            <a 
              href="#faq" 
              onClick={(e) => scrollToSection(e, 'faq')} 
              className="font-medium hover:text-primary transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-5">
            <a 
              href="https://x.com/Grid_SOL_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <FontAwesomeIcon 
                  icon={faXTwitter} 
                  className="w-[18px] h-[18px] transition-transform hover:scale-110" 
                />
              </div>
            </a>
            <a 
              href="https://t.me/Grid_Official" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary transition-colors"
              aria-label="Telegram"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <FontAwesomeIcon 
                  icon={faTelegram} 
                  className="w-[18px] h-[18px] transition-transform hover:scale-110" 
                />
              </div>
            </a>
            <a 
              
              className="text-gray-700 icon-link transition-colors"
              aria-label="DexTools"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <Image 
                  src="/dextools.svg" 
                  alt="DexTools" 
                  width={18} 
                  height={18}
                  className="w-[18px] h-[18px] transition-transform hover:scale-110 custom-svg" 
                />
              </div>
            </a>
            <a 
              
              className="text-gray-700 icon-link transition-colors"
              aria-label="DexScreener"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <Image 
                  src="/dex-screener.svg" 
                  alt="DexScreener" 
                  width={18} 
                  height={18}
                  className="w-[18px] h-[18px] transition-transform hover:scale-110 custom-svg" 
                />
              </div>
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          {/* Mobile Social Icons */}
          <div className="flex items-center space-x-4 mr-4">
            <a 
              href="https://x.com/Grid_SOL_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <FontAwesomeIcon 
                  icon={faXTwitter} 
                  className="w-[18px] h-[18px] transition-transform hover:scale-110" 
                />
              </div>
            </a>
            <a 
              href="https://t.me/Grid_Official" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary transition-colors"
              aria-label="Telegram"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <FontAwesomeIcon 
                  icon={faTelegram} 
                  className="w-[18px] h-[18px] transition-transform hover:scale-110" 
                />
              </div>
            </a>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {!mobileMenuOpen ? (
              <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <a 
              href="#features" 
              onClick={(e) => scrollToSection(e, 'features')} 
              className="font-medium py-2 border-b border-gray-100 hover:text-primary transition-colors"
            >
              Features
            </a>
            <a 
              href="#get-started" 
              onClick={(e) => scrollToSection(e, 'get-started')} 
              className="font-medium py-2 border-b border-gray-100 hover:text-primary transition-colors"
            >
              Get Started
            </a>
            <a 
              href="#ecosystem" 
              onClick={(e) => scrollToSection(e, 'ecosystem')} 
              className="font-medium py-2 border-b border-gray-100 hover:text-primary transition-colors"
            >
              Ecosystem
            </a>
            <a 
              href="#tokenomics" 
              onClick={(e) => scrollToSection(e, 'tokenomics')} 
              className="font-medium py-2 border-b border-gray-100 hover:text-primary transition-colors"
            >
              Tokenomics
            </a>
            <a 
              href="#roadmap" 
              onClick={(e) => scrollToSection(e, 'roadmap')} 
              className="font-medium py-2 border-b border-gray-100 hover:text-primary transition-colors"
            >
              Roadmap
            </a>
            <a 
              href="#faq" 
              onClick={(e) => scrollToSection(e, 'faq')} 
              className="font-medium py-2 border-b border-gray-100 hover:text-primary transition-colors"
            >
              FAQ
            </a>
            <div className="flex items-center space-x-5 py-2">
              <a 
                href="https://x.com/Grid_SOL_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <FontAwesomeIcon 
                    icon={faXTwitter} 
                    className="w-[18px] h-[18px] transition-transform hover:scale-110" 
                  />
                </div>
              </a>
              <a 
                href="https://t.me/Grid_Official" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
                aria-label="Telegram"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <FontAwesomeIcon 
                    icon={faTelegram} 
                    className="w-[18px] h-[18px] transition-transform hover:scale-110" 
                  />
                </div>
              </a>
              <a 
                href="https://www.dextools.io/app/en/ether/pair-explorer/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 icon-link transition-colors"
                aria-label="DexTools"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <Image 
                    src="/dextools.svg" 
                    alt="DexTools" 
                    width={18} 
                    height={18}
                    className="w-[18px] h-[18px] transition-transform hover:scale-110 custom-svg" 
                  />
                </div>
              </a>
              <a 
                href="https://dexscreener.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 icon-link transition-colors"
                aria-label="DexScreener"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <Image 
                    src="/dex-screener.svg" 
                    alt="DexScreener" 
                    width={18} 
                    height={18}
                    className="w-[18px] h-[18px] transition-transform hover:scale-110 custom-svg" 
                  />
                </div>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
} 