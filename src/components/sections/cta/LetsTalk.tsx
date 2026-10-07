import React from 'react';
import { motion, Variants } from 'framer-motion';
import { BookACallButton } from '../../common/BookACallButton';
import { EmailDirectlyButton } from '../../common/EmailDirectlyButton';
import { ScribbleDecoration } from '../../common/ScribbleDecoration';

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    rotate: 45,
    scale: 0.5,
  },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      delay: 0.25 + i * 0.07, // Added 0.25s base delay so animation starts later
      duration: 0.4,
      y: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
        mass: 0.8,
      },
      rotate: {
        type: 'spring',
        damping: 8,
        stiffness: 150,
      },
      scale: {
        type: 'spring',
        damping: 10,
        stiffness: 300,
      },
    },
  }),
};

export const LetsTalk: React.FC = () => {
  const headingText = "Let’s talk";

  return (
    <section
      id="lets-talk"
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        color: '#0a0a0a',
        padding: '6rem 0 9rem 0',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* CREATIVE BACKGROUND STAR SPARKLE ACCENTS BEFORE FOOTER */}
      <ScribbleDecoration
        type="sparkle"
        width={90}
        height={90}
        color="#62613F"
        opacity={0.8}
        style={{ top: '160px', left: '10%', transform: 'rotate(-15deg)' }}
      />
      <ScribbleDecoration
        type="sparkle"
        width={100}
        height={100}
        color="#62613F"
        opacity={0.75}
        style={{ top: '170px', right: '10%', transform: 'rotate(25deg)' }}
      />
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '0 2rem',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* GIANT "LET'S TALK" HEADING WITH WAVY SPRING CHARACTER ANIMATION */}
        <h3
          style={{
            fontFamily: "'Acorn', 'Suisse Intl', 'Inter', sans-serif",
            fontSize: 'clamp(4.5rem, 12vw, 9rem)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            color: '#0a0a0a',
            margin: '0 0 2.5rem 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {headingText.split('').map((char, index) => {
            if (char === ' ') {
              return (
                <span key={index} style={{ width: '0.3em', display: 'inline-block' }}>
                  &nbsp;
                </span>
              );
            }
            return (
              <motion.span
                key={index}
                custom={index}
                variants={textVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.45 }}
                style={{
                  display: 'inline-block',
                  transformOrigin: 'center center',
                  willChange: 'transform, opacity',
                }}
              >
                {char}
              </motion.span>
            );
          })}
        </h3>

        {/* EMAIL ADDRESS */}
        <motion.a
          href="mailto:rafiqsherffs@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
            fontWeight: 500,
            color: '#0a0a0a',
            textDecoration: 'none',
            borderBottom: '2px solid #0a0a0a',
            paddingBottom: '4px',
            marginBottom: '3rem',
            transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          rafiqsherffs@gmail.com
        </motion.a>

        {/* BUTTONS GROUP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <BookACallButton href="#contact" variant="dark" size="lg" />
          <EmailDirectlyButton href="mailto:rafiqsherffs@gmail.com" variant="secondary" size="lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default LetsTalk;
