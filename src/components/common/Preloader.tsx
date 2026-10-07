import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
  heroImageSrc?: string;
}

const GREETINGS = [
  { text: 'Hello', lang: 'English' },
  { text: 'வணக்கம்', lang: 'Tamil' },
  { text: 'مرحبا', lang: 'Arabic' },
  { text: 'नमस्ते', lang: 'Hindi' },
  { text: 'ನಮಸ್ಕಾರ', lang: 'Kannada' },
  { text: 'నమస్కారం', lang: 'Telugu' },
  { text: 'നമസ്കാരം', lang: 'Malayalam' },
  { text: 'Bonjour', lang: 'French' },
  { text: 'Hola', lang: 'Spanish' },
  { text: 'こんにちは', lang: 'Japanese' },
  { text: 'Ciao', lang: 'Italian' },
  { text: 'Hallo', lang: 'German' },
];

export const Preloader: React.FC<PreloaderProps> = ({
  onComplete,
  heroImageSrc = '/assets/image/hero/Hero.webp',
}) => {
  const [progress, setProgress] = useState<number>(0);
  const [, setIsImageLoaded] = useState<boolean>(false);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const [isDestroyed, setIsDestroyed] = useState<boolean>(false);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Preload Hero Section Image
  useEffect(() => {
    const img = new Image();
    img.src = heroImageSrc;
    img.onload = () => setIsImageLoaded(true);
    img.onerror = () => setIsImageLoaded(true); // Fallback so loader never hangs
  }, [heroImageSrc]);

  // Smooth Progress Timer (0 to 100)
  useEffect(() => {
    const duration = 2200; // ms total loading duration
    const intervalTime = 25; // ms update interval
    const totalSteps = duration / intervalTime;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const currentProgress = Math.min(100, Math.round((step / totalSteps) * 100));
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            setIsDestroyed(true);
            if (onComplete) onComplete();
          }, 850);
        }, 200);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (isDestroyed) return null;

  // Calculate greeting index based on progress percentage
  const currentGreetingIndex = Math.min(
    GREETINGS.length - 1,
    Math.floor((progress / 100) * GREETINGS.length)
  );

  const formattedNumber = String(progress).padStart(2, '0');

  // Curved SVG path morphing for the bottom edge during exit
  const w = dimension.width || (typeof window !== 'undefined' ? window.innerWidth : 1400);
  const h = dimension.height || (typeof window !== 'undefined' ? window.innerHeight : 900);

  const initialPath = `M0 0 L${w} 0 L${w} ${h} Q${w / 2} ${h} 0 ${h} Z`;
  const targetPath = `M0 0 L${w} 0 L${w} ${h} Q${w / 2} ${h - 350} 0 ${h} Z`;

  const curveVariants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isFadingOut ? '-100%' : 0 }}
      transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100dvh',
        zIndex: 999999,
        pointerEvents: isFadingOut ? 'none' : 'auto',
        userSelect: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Background SVG with Morphing Curved Bottom Edge */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: `${h + 350}px`,
          pointerEvents: 'none',
        }}
      >
        <motion.path
          fill="#000000"
          variants={curveVariants}
          initial="initial"
          animate={isFadingOut ? 'exit' : 'initial'}
        />
      </svg>

      {/* Main Content Container */}
      <motion.div
        animate={{ opacity: isFadingOut ? 0 : 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative',
          width: '100%',
          height: '100dvh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        {/* Center Multilingual Greeting */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '140px',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={GREETINGS[currentGreetingIndex].text}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily:
                  "'Acorn', 'Syne', 'Space Grotesk', 'Inter', system-ui, -apple-system, sans-serif",
                fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                margin: 0,
                textAlign: 'center',
              }}
            >
              {GREETINGS[currentGreetingIndex].text}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* BOTTOM BAR: HORIZONTAL LOADING LINE & BOTTOM RIGHT BIG NUMBER */}
        <div
          style={{
            position: 'absolute',
            bottom: 'clamp(1.5rem, 4vw, 3rem)',
            left: 'clamp(1.5rem, 4vw, 3rem)',
            right: 'clamp(1.5rem, 4vw, 3rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            zIndex: 10,
          }}
        >
          {/* Horizontal Progress Line */}
          <div
            style={{
              flex: 1,
              height: '3px',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              borderRadius: '9999px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${progress}%`,
                backgroundColor: '#ffffff',
                borderRadius: '9999px',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                transition: 'width 0.08s linear',
              }}
            />
          </div>

          {/* Bottom Right Big Number (0 to 100) */}
          <div
            style={{
              fontFamily: "'Space Grotesk', 'Syne', 'Inter', sans-serif",
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.04em',
              minWidth: '90px',
              textAlign: 'right',
              lineHeight: 1,
              fontVariantNumeric: 'tabular-nums',
              textShadow: '0 5px 20px rgba(255, 255, 255, 0.15)',
            }}
          >
            {formattedNumber}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;







