import { useState, useEffect } from 'react';

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const updateActiveSection = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setActiveSection(hash);
    };

    // Listen for hash changes
    window.addEventListener('hashchange', updateActiveSection);

    // Initial check
    updateActiveSection();

    return () => {
      window.removeEventListener('hashchange', updateActiveSection);
    };
  }, []);

  return activeSection;
};

export default useActiveSection;
