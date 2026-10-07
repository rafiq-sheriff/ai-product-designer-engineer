import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScribbleDecoration } from '../../common/ScribbleDecoration';

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  summary: string;
  height: number;
  width: number;
  rotation: number;
  bg: string;
  textColor: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 'discover',
    number: '01',
    title: 'Discover',
    summary: 'Understand the business, users, goals, and problems that need to be solved.',
    height: 365,
    width: 44,
    rotation: -6,
    bg: '#141416',
    textColor: '#e5e5e5',
  },
  {
    id: 'define',
    number: '02',
    title: 'Define',
    summary: 'Translate requirements into clear product goals, user flows, features, and architecture.',
    height: 415,
    width: 46,
    rotation: 0,
    bg: '#1a1a1e',
    textColor: '#ffffff',
  },
  {
    id: 'design',
    number: '03',
    title: 'Design',
    summary: 'Create wireframes, prototypes, visual systems, and polished interfaces focused on usability.',
    height: 435,
    width: 48,
    rotation: 0,
    bg: '#111113',
    textColor: '#62613F',
  },
  {
    id: 'build',
    number: '04',
    title: 'Build',
    summary: 'Turn designs into responsive, production-ready products using modern frontend and backend technologies.',
    height: 395,
    width: 46,
    rotation: 0,
    bg: '#16161a',
    textColor: '#ffffff',
  },
  {
    id: 'integrate-ai',
    number: '05',
    title: 'Integrate AI',
    summary: 'Add AI capabilities where they create real value—from intelligent features to AI-powered workflows.',
    height: 430,
    width: 48,
    rotation: 0,
    bg: '#0f0f12',
    textColor: '#d4d3a5',
  },
  {
    id: 'automate',
    number: '06',
    title: 'Automate',
    summary: 'Connect tools, APIs, and workflows to reduce repetitive work and improve business efficiency.',
    height: 225,
    width: 52,
    rotation: 0,
    bg: '#18181c',
    textColor: '#e2e2e2',
  },
  {
    id: 'launch',
    number: '07',
    title: 'Launch',
    summary: 'Test, optimize, deploy, and continuously refine the product for real-world use.',
    height: 375,
    width: 46,
    rotation: 22,
    bg: '#222226',
    textColor: '#62613F',
  },
];

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<ProcessStep>(processSteps[0]);
  const [hoveredStep, setHoveredStep] = useState<ProcessStep | null>(null);

  const currentStep = hoveredStep || activeStep;

  return (
    <section
      id="process"
      className="process-section"
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        color: '#0a0a0a',
        padding: '7rem 3rem',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @media (max-width: 992px) {
          .process-section {
            padding: 4rem 1.5rem !important;
          }
          .process-container {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 2.5rem !important;
            grid-template-columns: none !important;
          }
          .process-books-wrapper {
            grid-column: unset !important;
            width: 100% !important;
            max-width: 100% !important;
            height: 380px !important;
            justify-content: center !important;
          }
          .process-books-content {
            transform: scale(0.9);
            transform-origin: bottom center;
          }
          .process-text-wrapper {
            grid-column: unset !important;
            width: 100% !important;
            max-width: 100% !important;
          }
        }

        @media (max-width: 576px) {
          .process-books-wrapper {
            height: 330px !important;
          }
          .process-books-content {
            transform: scale(0.78);
            transform-origin: bottom center;
          }
        }

        @media (max-width: 400px) {
          .process-books-wrapper {
            height: 290px !important;
          }
          .process-books-content {
            transform: scale(0.68);
            transform-origin: bottom center;
          }
        }
      `}</style>

      {/* CREATIVE BACKGROUND SCRIBBLE ACCENTS IN PROCESS */}
      <ScribbleDecoration
        type="hand-circle"
        width={320}
        height={320}
        color="#62613F"
        strokeWidth={18}
        opacity={0.4}
        style={{ top: '60px', left: '-60px', transform: 'rotate(-20deg)' }}
      />
      <ScribbleDecoration
        type="loop-swirl"
        width={350}
        height={220}
        color="#62613F"
        strokeWidth={20}
        opacity={0.5}
        style={{ top: '35%', right: '-40px', transform: 'rotate(15deg)' }}
      />
      <ScribbleDecoration
        type="sparkle"
        width={80}
        height={80}
        color="#62613F"
        opacity={0.7}
        style={{ top: '15px', right: '15%', transform: 'rotate(-10deg)' }}
      />
      <ScribbleDecoration
        type="flow-curve"
        width={320}
        height={450}
        color="#62613F"
        strokeWidth={26}
        opacity={0.45}
        style={{ bottom: '-50px', left: '20%', transform: 'rotate(-40deg)' }}
      />
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '4rem',
          alignItems: 'center',
        }}
        className="process-container"
      >
        {/* LEFT COLUMN: 7 BOOK SPINES BOOKSHELF */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            gridColumn: 'span 6',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            height: '470px',
            position: 'relative',
            paddingBottom: '20px',
          }}
          className="process-books-wrapper"
        >
          <div
            className="process-books-content"
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
              width: '100%',
              height: '100%',
            }}
          >
            {/* BOOKSHELF BASE LINE */}
            <div
              style={{
                position: 'absolute',
                bottom: '18px',
                left: '2%',
                right: '2%',
                height: '2px',
                backgroundColor: '#e5e5e5',
                borderRadius: '2px',
              }}
            />

            {/* 7 BOOKS CONTAINER */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                gap: '4px',
                position: 'relative',
                zIndex: 2,
              }}
            >
              {processSteps.map((step, index) => {
                const isActive = currentStep.id === step.id;
                const isHovered = hoveredStep?.id === step.id;
                const origin =
                  step.rotation > 0
                    ? 'bottom left'
                    : step.rotation < 0
                    ? 'bottom right'
                    : 'bottom center';

                const zIndex = isHovered ? 30 : isActive ? 20 : step.rotation !== 0 ? 12 : 5;

                return (
                  <motion.div
                    key={step.id}
                    onClick={() => setActiveStep(step)}
                    onMouseEnter={() => setHoveredStep(step)}
                    onMouseLeave={() => setHoveredStep(null)}
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: step.rotation }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ y: -14, scale: 1.03, rotate: step.rotation }}
                    transition={{
                      type: 'spring',
                      mass: 1.4,
                      stiffness: 75,
                      damping: 14,
                      delay: step.rotation !== 0 ? 0.35 : index * 0.05,
                    }}
                    style={{
                      height: `${step.height}px`,
                      width: `${step.width}px`,
                      backgroundColor: isHovered || isActive ? '#0a0a0a' : step.bg,
                      borderRadius: '6px 6px 2px 2px',
                      boxShadow: isHovered
                        ? '0 16px 32px rgba(0, 0, 0, 0.25), inset 0 0 0 1px rgba(255, 255, 255, 0.2)'
                        : '0 8px 20px rgba(0, 0, 0, 0.12), inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
                      cursor: 'pointer',
                      transformOrigin: origin,
                      zIndex,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1.25rem 0.5rem',
                      boxSizing: 'border-box',
                      userSelect: 'none',
                      position: 'relative',
                      transition: 'background-color 0.25s ease, box-shadow 0.25s ease',
                    }}
                  >
                    {/* BOOK SPINE RIDGE / EMBOSS ACCENT */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '4px',
                        right: '4px',
                        height: '2px',
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        left: '4px',
                        right: '4px',
                        height: '2px',
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      }}
                    />

                    {/* STEP NUMBER */}
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        color: isHovered || isActive ? '#62613F' : step.textColor,
                        fontFamily: "'Inter', sans-serif",
                        letterSpacing: '0.05em',
                      }}
                    >
                      {step.number}
                    </span>

                    {/* VERTICAL TITLE ON BOOK SPINE */}
                    <div
                      style={{
                        writingMode: 'vertical-rl',
                        transform: 'rotate(180deg)',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        color: isHovered || isActive ? '#ffffff' : step.textColor,
                        fontFamily: "'Inter', sans-serif",
                        whiteSpace: 'nowrap',
                        textTransform: 'uppercase',
                      }}
                    >
                      {step.title}
                    </div>

                    {/* BOTTOM BOOKMARK / ICON DOT */}
                    <div
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: isHovered || isActive ? '#62613F' : 'rgba(255, 255, 255, 0.3)',
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: PROCESS CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            gridColumn: 'span 6',
            display: 'flex',
            flexDirection: 'column',
          }}
          className="process-text-wrapper"
        >
          {/* HEADER TAG */}
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.2em',
              color: '#8c8c8c',
              textTransform: 'uppercase',
              fontFamily: "'Inter', sans-serif",
              marginBottom: '1rem',
            }}
          >
            DESIGN + ENGINEERING PROCESS
          </span>

          {/* MAIN HEADING */}
          <h2
            style={{
              fontFamily: "'Acorn', 'Suisse Intl', 'Inter', sans-serif",
              fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#0a0a0a',
              margin: '0 0 1rem 0',
            }}
          >
            From idea to intelligent product.
          </h2>

          {/* MAIN PARAGRAPH */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.05rem',
              lineHeight: 1.65,
              color: '#525252',
              margin: '0 0 1.5rem 0',
              fontWeight: 400,
            }}
          >
            I combine product thinking, design, engineering, and AI to take ideas from an initial concept to a functional, scalable digital product.
          </p>

          {/* INTERACTIVE ACTIVE STEP CARD */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: '#f8f8f9',
                borderRadius: '16px',
                padding: '1.5rem 1.75rem',
                border: '1px solid #e8e8ed',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    backgroundColor: '#62613F',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '100px',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {currentStep.number}
                </span>
                <h3
                  style={{
                    fontFamily: "'Acorn', 'Suisse Intl', 'Inter', sans-serif",
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#0a0a0a',
                    margin: 0,
                  }}
                >
                  {currentStep.title}
                </h3>
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.92rem',
                  lineHeight: 1.55,
                  color: '#666666',
                  margin: 0,
                }}
              >
                {currentStep.summary}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
