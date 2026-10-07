import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/sections/hero/hero';
import { About } from './components/sections/about/About';
import { Showcase } from './components/sections/showcase/Showcase';
import { Process } from './components/sections/process/Process';
import { CTAMarquee } from './components/sections/cta/CTAMarquee';
import { LetsTalk } from './components/sections/cta/LetsTalk';
import { Contact } from './components/sections/contact/Contact';
import { Preloader } from './components/common/Preloader';
import { ProjectsPage } from './pages/ProjectsPage';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState(null, '', path);
    setCurrentPath(path);
  };

  const isProjectsPage = currentPath === '/projects';

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', width: '100%' }}>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Navbar preloaderComplete={!loading} onNavigate={navigateTo} />

      {isProjectsPage ? (
        <ProjectsPage onBackToHome={() => navigateTo('/')} />
      ) : (
        <main>
          <Hero preloaderComplete={!loading} />
          <About />
          <Showcase onNavigateToProjects={() => navigateTo('/projects')} />
          <Process />
          <CTAMarquee />
          <LetsTalk />
          <Contact />
        </main>
      )}
    </div>
  );
};

export default App;
