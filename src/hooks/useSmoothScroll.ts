"use client";
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export function useSmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  
  useEffect(() => {
    // Initialize Lenis smooth scrolling with minimal configuration
    // to avoid TypeScript errors
    const lenis = new Lenis();

    lenisRef.current = lenis;

    // Integrate with rAF (requestAnimationFrame)
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    // Handle navigation to hash links
    const handleHashLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.getAttribute('href')?.startsWith('#')) {
        event.preventDefault();
        
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement instanceof HTMLElement) {
          lenis.scrollTo(targetElement, {
            offset: -100, // Adjust offset as needed
          });
        }
      }
    };

    document.addEventListener('click', handleHashLinkClick);

    return () => {
      document.removeEventListener('click', handleHashLinkClick);
      lenis.destroy();
    };
  }, []);

  return lenisRef;
} 