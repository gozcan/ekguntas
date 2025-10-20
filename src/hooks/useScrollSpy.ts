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
      const url = new URL(window.location.href);
      url.hash = `#${sectionId}`;
      window.history.replaceState(null, '', url.toString());
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Better offset calculation

      let currentSection = '';

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.element.offsetTop;
        const sectionHeight = section.element.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;

        // Check if we're in the middle of this section
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = section.id;
          break;
        }

        // If we're past all sections, select the last one
        if (i === sections.length - 1 && scrollPosition >= sectionTop) {
          currentSection = section.id;
        }
      }

      // Update URL only if section changed
      if (currentSection && window.location.hash !== `#${currentSection}`) {
        updateURL(currentSection);
      }

      // If we're at the very top of the page, show home
      if (window.scrollY < 100) {
        if (window.location.hash !== '#home') {
          updateURL('home');
        }
      }
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
