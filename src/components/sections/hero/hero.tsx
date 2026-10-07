import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScribbleDecoration } from '../../common/ScribbleDecoration';

const roles = ['Designer', 'Engineer'];

interface HeroProps {
  preloaderComplete?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ preloaderComplete = true }) => {
  const [roleIndex, setRoleIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id="home"
      className="hero-section"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        color: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '6.5rem 3rem 2rem 3rem',
        overflow: 'hidden',
        boxSizing: 'border-box',
        userSelect: 'none',
      }}
    >
      <style>{`
        .hero-text-container {
          position: relative;
          z-index: 25;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding-bottom: 0.5rem;
        }

        .hero-heading-block {
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .hero-description-block {
          max-width: 380px;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          text-align: right;
          align-items: flex-end;
        }

        .hero-avatar-wrapper {
          position: absolute;
          inset: 0;
          z-index: 10;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          pointer-events: none;
          overflow: hidden;
        }

        .hero-avatar-img {
          height: 92vh;
          max-height: 92vh;
          width: auto;
          object-fit: contain;
          display: block;
          transform-origin: bottom center;
          will-change: transform, opacity;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.06));
        }

        @media (max-width: 992px) {
          .hero-section {
            padding: 9.5rem 1.25rem 0 1.25rem !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            min-height: 100vh !important;
          }
          .hero-sidebar-left,
          .hero-sidebar-right {
            display: none !important;
          }
          .hero-text-container {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 1.25rem !important;
            order: 1 !important;
            z-index: 25 !important;
            margin-top: 2.5rem !important;
          }
          .hero-heading-block {
            align-items: center !important;
            text-align: center !important;
          }
          .hero-description-block {
            max-width: 100% !important;
            text-align: center !important;
            align-items: center !important;
          }
          .hero-avatar-wrapper {
            position: relative !important;
            inset: auto !important;
            order: 2 !important;
            width: 100% !important;
            flex: 1 !important;
            display: flex !important;
            align-items: flex-end !important;
            justify-content: center !important;
            margin-top: 1rem !important;
            z-index: 10 !important;
          }
          .hero-avatar-img {
            height: 52vh !important;
            max-height: 460px !important;
          }
        }

        @media (max-width: 576px) {
          .hero-section {
            padding: 8.5rem 1rem 0 1rem !important;
          }
          .hero-text-container {
            margin-top: 2rem !important;
          }
          .hero-avatar-img {
            height: 50vh !important;
            max-height: 420px !important;
          }
        }
      `}</style>

      {/* LEFT SIDEBAR ELEMENT: LATEST */}
      <motion.div
        className="hero-sidebar-left"
        initial={{ y: 15, opacity: 0 }}
        animate={preloaderComplete ? { y: 0, opacity: 1 } : { y: 15, opacity: 0 }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
          delay: 1.2,
        }}
        style={{
          position: 'absolute',
          left: '3rem',
          top: '46%',
          zIndex: 20,
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.2em',
          color: '#8c8c8c',
          textTransform: 'uppercase',
          fontFamily: "'Inter', sans-serif",
          lineHeight: 1,
        }}
      >
        LATEST
      </motion.div>

      {/* RIGHT SIDEBAR ELEMENT: PROJECTS */}
      <motion.div
        className="hero-sidebar-right"
        initial={{ y: 15, opacity: 0 }}
        animate={preloaderComplete ? { y: 0, opacity: 1 } : { y: 15, opacity: 0 }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
          delay: 1.2,
        }}
        style={{
          position: 'absolute',
          right: '3rem',
          top: '46%',
          zIndex: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <span
          style={{
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            color: '#8c8c8c',
            textTransform: 'uppercase',
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1,
          }}
        >
          PROJECTS
        </span>
        <a
          href="#showcase"
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: '#0a0a0a',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.15)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <ArrowUpRight size={16} />
        </a>
      </motion.div>

      {/* BACKGROUND SCRIBBLE ACCENTS */}
      <motion.div
        initial={{ opacity: 0, scale: 0.4, rotate: -25 }}
        animate={preloaderComplete ? { opacity: 0.8, scale: 1, rotate: -12 } : { opacity: 0, scale: 0.4 }}
        transition={{ duration: 0.75, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          top: isMobile ? '14%' : '25%',
          left: isMobile ? '2%' : '5.5%',
          zIndex: 15,
          pointerEvents: 'none',
        }}
      >
        <ScribbleDecoration
          type="sparkle"
          width={isMobile ? 36 : 58}
          height={isMobile ? 36 : 58}
          color="#62613F"
          animatedOnScroll={false}
          opacity={0.8}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.4, rotate: 20 }}
        animate={preloaderComplete ? { opacity: 0.85, scale: 1, rotate: 15 } : { opacity: 0, scale: 0.4 }}
        transition={{ duration: 0.75, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          top: isMobile ? '13%' : '23%',
          right: isMobile ? '2%' : '6.5%',
          zIndex: 15,
          pointerEvents: 'none',
        }}
      >
        <ScribbleDecoration
          type="star-burst"
          width={isMobile ? 34 : 52}
          height={isMobile ? 34 : 52}
          color="#62613F"
          animatedOnScroll={false}
          opacity={0.85}
        />
      </motion.div>

      {/* HERO TEXT CONTAINER (TOP ON MOBILE) */}
      <div className="hero-text-container">
        {/* HEADING BLOCK */}
        <motion.div
          className="hero-heading-block"
          initial={{ y: 35, opacity: 0 }}
          animate={preloaderComplete ? { y: 0, opacity: 1 } : { y: 35, opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: 1.1,
          }}
        >
          <h1
            style={{
              fontFamily: "'Acorn', 'Suisse Intl', 'Inter', sans-serif",
              fontSize: 'clamp(2.4rem, 8.5vw, 6rem)',
              fontWeight: 900,
              WebkitTextStroke: isMobile ? '0.8px #0a0a0a' : '1.2px #0a0a0a',
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              color: '#0a0a0a',
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: isMobile ? 'center' : 'flex-start',
            }}
          >
            <span>AI Product</span>

            <span style={{ display: 'block', position: 'relative', overflow: 'hidden', height: '0.95em' }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 35, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -35, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: 'block' }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={preloaderComplete ? { opacity: 0.85, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.85, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              bottom: isMobile ? '0.2rem' : '1rem',
              left: isMobile ? '50%' : '0.2rem',
              transform: isMobile ? 'translateX(-50%)' : 'none',
              zIndex: 26,
              pointerEvents: 'none',
              transformOrigin: isMobile ? 'center center' : 'left center',
            }}
          >
            <ScribbleDecoration
              type="underline-swoosh"
              width={isMobile ? 200 : 320}
              height={isMobile ? 30 : 45}
              color="#62613F"
              strokeWidth={isMobile ? 10 : 14}
              animatedOnScroll={false}
              opacity={0.85}
            />
          </motion.div>
        </motion.div>

        {/* DESCRIPTION BLOCK */}
        <motion.div
          className="hero-description-block"
          initial={{ y: 25, opacity: 0 }}
          animate={preloaderComplete ? { y: 0, opacity: 1 } : { y: 25, opacity: 0 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
            delay: 1.25,
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
              lineHeight: 1.55,
              fontWeight: 500,
              color: '#555555',
              margin: 0,
            }}
          >
            Designing thoughtful digital experiences and building AI-powered products that solve real business problems
          </p>
        </motion.div>
      </div>

      {/* CENTER AVATAR IMAGE (BOTTOM / CENTER DOWN ON MOBILE) */}
      <div className="hero-avatar-wrapper">
        <motion.img
          className="hero-avatar-img"
          src="/assets/image/hero/Hero.webp"
          alt="Avatar 3D Model"
          initial={{ y: 120, scale: 0.78, opacity: 0 }}
          animate={
            preloaderComplete
              ? { y: 0, scale: 1, opacity: 1 }
              : { y: 120, scale: 0.78, opacity: 0 }
          }
          transition={{
            duration: 1.15,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.15,
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
