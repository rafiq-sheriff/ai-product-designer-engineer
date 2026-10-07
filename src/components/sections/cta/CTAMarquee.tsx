import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ScribbleDecoration } from '../../common/ScribbleDecoration';

const bannerText = "From idea to production. I design, build, and automate digital products";

export const CTAMarquee: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [textWidth, setTextWidth] = useState<number>(0);
  const [viewportWidth, setViewportWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const updateMeasurements = () => {
      if (textRef.current) {
        setTextWidth(textRef.current.scrollWidth);
      }
      setViewportWidth(window.innerWidth);
    };

    updateMeasurements();
    window.addEventListener('resize', updateMeasurements);
    
    // Safety timer for font loading and layout shifts
    const timer = setTimeout(updateMeasurements, 400);

    return () => {
      window.removeEventListener('resize', updateMeasurements);
      clearTimeout(timer);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth out scroll progress for a high-end, fluid scroll feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });

  // Horizontal animation bounds:
  // Start: viewportWidth (text enters from the right edge)
  // End: -(textWidth + 120) (text completely passes off the left edge)
  // Horizontal scroll finishes by 0.88 progress so vertical scroll unlocks cleanly
  const startX = viewportWidth;
  const endX = textWidth > 0 ? -(textWidth + 120) : -3200;

  const xMarquee = useTransform(smoothProgress, [0, 0.88], [startX, endX]);

  const characters = bannerText.split('');

  return (
    <section
      ref={containerRef}
      id="cta-marquee"
      style={{
        width: '100%',
        height: '450vh', // Extended height to lock section vertically during horizontal scroll
        backgroundColor: '#ffffff',
        color: '#0a0a0a',
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      {/* PINNED FULL-SCREEN VIEWPORT CONTAINER (LOCKED VERTICALLY) */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          boxSizing: 'border-box',
          backgroundColor: '#ffffff',
        }}
      >
        {/* CREATIVE BACKGROUND SCRIBBLE ACCENTS IN MARQUEE */}
        <ScribbleDecoration
          type="zigzag-ribbon"
          width={650}
          height={240}
          color="#62613F"
          strokeWidth={28}
          opacity={0.35}
          style={{ top: '20%', left: '10%', transform: 'rotate(-6deg)' }}
        />
        <ScribbleDecoration
          type="infinity-loop"
          width={450}
          height={220}
          color="#62613F"
          strokeWidth={22}
          opacity={0.4}
          style={{ bottom: '15%', right: '5%', transform: 'rotate(12deg)' }}
        />
        <ScribbleDecoration
          type="sparkle"
          width={90}
          height={90}
          color="#62613F"
          opacity={0.7}
          style={{ top: '15%', right: '20%', transform: 'rotate(20deg)' }}
        />
        {/* SCROLL-DRIVEN HORIZONTAL MARQUEE TRACK */}
        <motion.div
          style={{
            x: xMarquee,
            display: 'inline-flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            willChange: 'transform',
          }}
        >
          <h2
            ref={textRef}
            style={{
              fontFamily: "'Acorn', 'Space Grotesk', 'Inter', sans-serif",
              fontSize: 'clamp(4.5rem, 11vw, 9.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1,
              color: '#0a0a0a',
              margin: 0,
              display: 'inline-flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            {characters.map((char, index) => {
              if (char === ' ') {
                return (
                  <span key={index} style={{ width: '0.35em', display: 'inline-block' }}>
                    &nbsp;
                  </span>
                );
              }
              const isEven = index % 2 === 0;
              const yStart = isEven ? -60 : 60; // Alternates: even chars from UP (-60), odd chars from DOWN (+60)

              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: yStart, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.01 }}
                  transition={{
                    duration: 0.45,
                    delay: (index % 8) * 0.025,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    display: 'inline-block',
                    willChange: 'transform, opacity, filter',
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAMarquee;
