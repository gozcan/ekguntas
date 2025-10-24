import { useEffect } from 'react';

interface Section {
  id: string;
  element: HTMLElement;
}

const useScrollSpy = () => {
  useEffect(() => {
    const sections: Section[] = [];
    const sectionIds = ['home', 'about', 'services', 'projects', 'contact'];

    // Get all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        sections.push({ id, element });
      }
    });

    const updateURL = (sectionId: string) => {
      if (window.location.hash !== `#${sectionId}`) {
        const url = new URL(window.location.href);
        url.hash = `#${sectionId}`;
        window.history.replaceState(null, '', url.toString());

        // Manually trigger hashchange event for useActiveSection hook
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Fixed header offset
      let currentSection = 'home'; // Default to home

      // Find which section we're currently in
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionTop = section.element.offsetTop - 120; // Account for fixed header

        if (scrollPosition >= sectionTop) {
          currentSection = section.id;
          break;
        }
      }

      // Update URL and trigger navigation update
      updateURL(currentSection);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);
};

export default useScrollSpy;
