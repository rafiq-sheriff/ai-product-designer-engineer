import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { BookACallButton } from '../common/BookACallButton';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'WORK', href: '#showcase' },
  { label: 'PROCESS', href: '#process' },
  { label: 'CONTACT', href: '#contact' },
];

interface NavbarProps {
  preloaderComplete?: boolean;
  onNavigate?: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ preloaderComplete = true, onNavigate }) => {
  const [activeSection, setActiveSection] = useState<string>('#home');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={preloaderComplete ? { y: 0, opacity: 1 } : { y: -60, opacity: 0 }}
        transition={{
          duration: 0.85,
          ease: [0.16, 1, 0.3, 1],
          delay: 1.05,
        }}
        style={{
          position: 'fixed',
          top: '1.25rem',
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 1.25rem',
          pointerEvents: 'none',
        }}
      >
        <div
          className="navbar-container"
          style={{
            pointerEvents: 'auto',
            width: '100%',
            maxWidth: '1180px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: scrolled ? '0.45rem 0.6rem 0.45rem 1.25rem' : '0.65rem 0.75rem 0.65rem 1.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            borderRadius: '9999px',
            border: '1px solid rgba(10, 10, 10, 0.08)',
            boxShadow: scrolled
              ? '0 16px 40px -10px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.5) inset'
              : '0 8px 24px -6px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* BRAND LEFT BLOCK */}
          <a
            href="#home"
            onClick={(e) => {
              setMobileMenuOpen(false);
              if (window.location.pathname === '/projects') {
                e.preventDefault();
                if (onNavigate) onNavigate('/');
                else {
                  window.history.pushState(null, '', '/');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }
              }
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              color: '#0a0a0a',
            }}
          >
            {/* Monogram Badge */}
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                backgroundColor: '#0a0a0a',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Acorn', 'Inter', sans-serif",
                fontWeight: 800,
                fontSize: '0.95rem',
                letterSpacing: '-0.02em',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'transform 0.3s ease',
                flexShrink: 0,
              }}
            >
              R
            </div>

            <span
              style={{
                fontFamily: "'Acorn', 'Inter', sans-serif",
                fontSize: '0.9rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#0a0a0a',
                lineHeight: 1.1,
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              RAFIQ SHERIFF
            </span>
          </a>

          {/* DESKTOP NAVIGATION CAPSULE */}
          <nav
            className="desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              backgroundColor: 'rgba(10, 10, 10, 0.04)',
              padding: '0.25rem 0.35rem',
              borderRadius: '9999px',
              position: 'relative',
            }}
          >
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href && window.location.pathname !== '/projects';
              const isHovered = hoveredIndex === index;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    if (window.location.pathname === '/projects') {
                      e.preventDefault();
                      if (onNavigate) {
                        onNavigate('/');
                        setTimeout(() => {
                          const target = document.querySelector(item.href);
                          if (target) target.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      } else {
                        window.history.pushState(null, '', `/${item.href}`);
                        window.dispatchEvent(new PopStateEvent('popstate'));
                      }
                    }
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    position: 'relative',
                    padding: '0.45rem 1rem',
                    fontSize: '0.72rem',
                    fontWeight: isActive ? 700 : 600,
                    letterSpacing: '0.1em',
                    color: isActive ? '#ffffff' : isHovered ? '#0a0a0a' : '#525252',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    fontFamily: "'Inter', sans-serif",
                    transition: 'color 0.2s ease',
                    zIndex: 2,
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: '#0a0a0a',
                        borderRadius: '9999px',
                        zIndex: -1,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                      }}
                    />
                  )}

                  {!isActive && isHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.06)',
                        borderRadius: '9999px',
                        zIndex: -1,
                      }}
                    />
                  )}

                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* DESKTOP CTA BUTTON */}
          <div className="desktop-cta">
            <BookACallButton href="#contact" variant="dark" size="sm" />
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              display: 'none',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: '#0a0a0a',
              color: '#ffffff',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              border: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              transition: 'transform 0.2s ease',
            }}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .desktop-nav, .desktop-cta {
              display: none !important;
            }
            .mobile-menu-toggle {
              display: flex !important;
            }
            .navbar-container {
              padding: 0.45rem 0.5rem 0.45rem 0.85rem !important;
            }
          }
        `}</style>
      </motion.header>

      {/* MOBILE FULLSCREEN/CARD MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: '4.8rem',
              left: '1rem',
              right: '1rem',
              zIndex: 99,
              backgroundColor: 'rgba(255, 255, 255, 0.96)',
              backdropFilter: 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              borderRadius: '24px',
              border: '1px solid rgba(10, 10, 10, 0.08)',
              boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.18)',
              padding: '1.75rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href && window.location.pathname !== '/projects';

                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.25 }}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      if (window.location.pathname === '/projects') {
                        e.preventDefault();
                        if (onNavigate) {
                          onNavigate('/');
                          setTimeout(() => {
                            const target = document.querySelector(item.href);
                            if (target) target.scrollIntoView({ behavior: 'smooth' });
                          }, 100);
                        } else {
                          window.history.pushState(null, '', `/${item.href}`);
                          window.dispatchEvent(new PopStateEvent('popstate'));
                        }
                      }
                    }}
                    style={{
                      fontFamily: "'Acorn', 'Inter', sans-serif",
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: isActive ? '#62613F' : '#0a0a0a',
                      textDecoration: 'none',
                      padding: '0.65rem 0',
                      borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: '#62613F',
                        }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>

            <div style={{ paddingTop: '0.5rem', display: 'flex', justifyContent: 'center' }}>
              <BookACallButton href="#contact" variant="dark" size="lg" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
