import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScribbleDecoration } from '../../common/ScribbleDecoration';

const coreExpertise = [
  {
    title: 'UI/UX & Product Design',
    description:
      'Research, user flows, wireframes, prototypes, and design systems that turn complex requirements into intuitive product experiences.',
  },
  {
    title: 'AI Product Engineering',
    description:
      'Building scalable digital products with modern frontend technologies, APIs, backend systems, and AI capabilities.',
  },
  {
    title: 'AI & Automation',
    description:
      'AI-powered features, intelligent workflows, AI agents, and business automation that make products smarter and more efficient.',
  },
  {
    title: 'SaaS, CMS & Dashboards',
    description:
      'Designing and engineering scalable SaaS platforms, CMS solutions, admin portals, and data-driven dashboards.',
  },
];

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Smooth horizontal translation to the right on scroll (contained on mobile)
  const xShiftDesktop = useTransform(scrollYProgress, [0.1, 0.6], [0, 260]);
  const xShiftMobile = useTransform(scrollYProgress, [0.1, 0.6], [0, 35]);
  const xShift = isMobile ? xShiftMobile : xShiftDesktop;

  // Self-drawing scribble effect on scroll
  const scribblePathLength = useTransform(scrollYProgress, [0.08, 0.5], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="about-section"
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        color: '#0a0a0a',
        padding: '5rem 3rem 7rem 3rem',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @media (max-width: 992px) {
          .about-section {
            padding: 4rem 1.25rem 5rem 1.25rem !important;
          }
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.25rem !important;
            width: 100% !important;
          }
          .about-img-col, .about-text-col {
            grid-column: span 12 !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
        }
        @media (max-width: 640px) {
          .expertise-grid {
            grid-template-columns: 1fr !important;
            gap: 1.75rem !important;
          }
        }
      `}</style>

      {/* SEPARATE BACKGROUND SELF-DRAWING SCRIBBLE SVG (#62613F) */}
      <svg
        width="340"
        height="580"
        viewBox="0 0 340 580"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          left: 'clamp(180px, 28vw, 420px)',
          top: '-70px',
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'visible',
        }}
      >
        <motion.path
          d="M 220 -80 C 60 80 320 280 80 540"
          stroke="#62613F"
          strokeWidth="32"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength: scribblePathLength }}
        />
      </svg>

      {/* ADDITIONAL CREATIVE SCRIBBLE ACCENTS IN ABOUT SECTION */}
      <ScribbleDecoration
        type="sparkle"
        width={70}
        height={70}
        color="#62613F"
        opacity={0.7}
        style={{ top: '80px', right: '12%', transform: 'rotate(15deg)' }}
      />
      <ScribbleDecoration
        type="loop-swirl"
        width={260}
        height={180}
        color="#62613F"
        strokeWidth={18}
        opacity={0.45}
        style={{ bottom: '40px', right: '-30px', transform: 'rotate(-10deg)' }}
      />

      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
          position: 'relative',
          zIndex: 1,
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* GIANT TOP HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ width: '100%', overflow: 'hidden' }}
        >
          <h2
            style={{
              fontFamily: "'Acorn', 'Suisse Intl', 'Inter', sans-serif",
              fontSize: 'clamp(2.2rem, 7vw, 6.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.02,
              color: '#0a0a0a',
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <motion.span
              style={{
                x: xShift,
                display: 'block',
                whiteSpace: isMobile ? 'normal' : 'nowrap',
                willChange: 'transform',
              }}
            >
              Designing Digital
            </motion.span>
            <span
              style={{
                display: 'block',
                whiteSpace: isMobile ? 'normal' : 'nowrap',
              }}
            >
              Product Systems
            </span>
          </h2>
        </motion.div>

        {/* TWO-COLUMN CONTENT GRID */}
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '3.5rem',
            alignItems: 'start',
            marginTop: '0.5rem',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          {/* LEFT COLUMN: IMAGE CONTAINER */}
          <motion.div
            className="about-img-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              gridColumn: 'span 5',
              width: '100%',
              borderRadius: '20px',
              overflow: 'hidden',
              backgroundColor: '#e5e5e5',
              position: 'relative',
              aspectRatio: '4 / 4.6',
              boxSizing: 'border-box',
            }}
          >
            <img
              src="/assets/image/about/about-animation.webp"
              alt="Rafiq Sheriff - AI Product Designer & Engineer"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />
          </motion.div>

          {/* RIGHT COLUMN: INTRO & CORE EXPERTISE */}
          <motion.div
            className="about-text-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              gridColumn: 'span 7',
              display: 'flex',
              flexDirection: 'column',
              paddingTop: '0.25rem',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            {/* INTRO PARAGRAPHS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(1.15rem, 4vw, 1.35rem)',
                  fontWeight: 600,
                  lineHeight: 1.4,
                  color: '#0a0a0a',
                  margin: 0,
                  overflowWrap: 'break-word',
                  wordBreak: 'break-word',
                }}
              >
                Hi, I’m Rafiq Sheriff, an AI Product Designer & Engineer.
              </h3>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(0.9rem, 3.2vw, 1.05rem)',
                  lineHeight: 1.65,
                  color: '#525252',
                  margin: 0,
                  fontWeight: 400,
                  overflowWrap: 'break-word',
                  wordBreak: 'break-word',
                }}
              >
                I design and engineer AI-powered digital products that bring together thoughtful UX, modern technology, and intelligent automation. I work across the entire product journey from understanding business problems and designing experiences to building scalable products, integrating AI, and automating workflows.
              </p>
            </div>

            {/* CORE EXPERTISE HEADER */}
            <div style={{ marginBottom: '1.5rem' }}>
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  color: '#8c8c8c',
                  textTransform: 'uppercase',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                CORE EXPERTISE
              </span>
            </div>

            {/* 2x2 CORE EXPERTISE GRID */}
            <div
              className="expertise-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2.5rem 2.5rem',
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              {coreExpertise.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.4rem',
                      width: '100%',
                      boxSizing: 'border-box',
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: '#0a0a0a',
                        margin: 0,
                        lineHeight: 1.3,
                        overflowWrap: 'break-word',
                        wordBreak: 'break-word',
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.85rem',
                        lineHeight: 1.55,
                        color: '#737373',
                        margin: 0,
                        overflowWrap: 'break-word',
                        wordBreak: 'break-word',
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
