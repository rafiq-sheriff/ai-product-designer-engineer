import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScribbleDecoration } from '../../common/ScribbleDecoration';

interface ShowcaseProps {
  onNavigateToProjects?: () => void;
}

export const Showcase: React.FC<ShowcaseProps> = ({ onNavigateToProjects }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isViewAllHovered, setIsViewAllHovered] = useState(false);

  const handleCardClick = () => {
    if (onNavigateToProjects) {
      onNavigateToProjects();
    } else {
      window.history.pushState(null, '', '/projects');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <section
      id="showcase"
      className="showcase-section"
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        color: '#0a0a0a',
        padding: '6rem 3rem 8rem 3rem',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .showcase-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 1.25rem;
        }
        .showcase-card-1 {
          grid-column: span 4;
          height: 380px;
        }
        .showcase-card-2 {
          grid-column: span 8;
          height: 380px;
        }
        .showcase-card-3 {
          grid-column: span 4;
          height: 420px;
        }
        .showcase-card-4 {
          grid-column: span 4;
          height: 420px;
        }
        .showcase-card-5 {
          grid-column: span 4;
          height: 420px;
        }

        @media (max-width: 900px) {
          .showcase-section {
            padding: 4rem 1.25rem 5rem 1.25rem !important;
          }
          .showcase-grid {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
          }
          .showcase-card-1,
          .showcase-card-2,
          .showcase-card-3,
          .showcase-card-4,
          .showcase-card-5 {
            grid-column: span 12 !important;
            width: 100% !important;
            height: 320px !important;
          }
        }

        @media (max-width: 480px) {
          .showcase-card-1,
          .showcase-card-2,
          .showcase-card-3,
          .showcase-card-4,
          .showcase-card-5 {
            height: 290px !important;
          }
        }
      `}</style>

      {/* CREATIVE BACKGROUND SCRIBBLE ACCENTS IN SHOWCASE */}
      <ScribbleDecoration
        type="flow-curve"
        width={340}
        height={500}
        color="#62613F"
        strokeWidth={28}
        opacity={0.5}
        style={{ top: '-40px', left: '-50px', transform: 'rotate(25deg)' }}
      />
      <ScribbleDecoration
        type="infinity-loop"
        width={380}
        height={200}
        color="#62613F"
        strokeWidth={22}
        opacity={0.4}
        style={{ top: '25%', right: '-60px', transform: 'rotate(-15deg)' }}
      />
      <ScribbleDecoration
        type="star-burst"
        width={90}
        height={90}
        color="#62613F"
        opacity={0.65}
        style={{ top: '52%', left: '8%', transform: 'rotate(10deg)' }}
      />
      <ScribbleDecoration
        type="zigzag-ribbon"
        width={420}
        height={180}
        color="#62613F"
        strokeWidth={20}
        opacity={0.35}
        style={{ bottom: '40px', right: '10%', transform: 'rotate(5deg)' }}
      />

      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* TOP TITLE CONTAINER */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '3rem',
            textAlign: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            
            <h2
              style={{
                fontFamily: "'Acorn', 'Suisse Intl', 'Inter', sans-serif",
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                color: '#0a0a0a',
                margin: 0,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
              }}
            >
              Selected Work
            </h2>
          </motion.div>
        </div>

        {/* BENTO GRID CONTAINER */}
        <div className="showcase-grid">
          {/* CARD 1: SherifIQ Platform */}
          <motion.div
            className="showcase-card-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setHoveredCard('card-1')}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={handleCardClick}
            style={{
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: '#141416',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '1.75rem',
              boxSizing: 'border-box',
            }}
          >
            <img
              src="/assets/image/projects/sherifiq.webp"
              alt="SherifIQ AI"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: 'translateZ(0)',
              }}
            />
            <img
              src="/assets/image/projects/sherifiq.webp"
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(100%)',
                opacity: hoveredCard === 'card-1' ? 0 : 1,
                transition: 'opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                willChange: 'opacity',
                transform: 'translateZ(0)',
              }}
            />

            <div
              style={{
                position: 'relative',
                zIndex: 10,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "'Acorn', 'Suisse Intl', 'Inter', sans-serif",
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    margin: 0,
                    color: '#ffffff',
                    textShadow: '0 2px 10px rgba(0,0,0,0.6)',
                  }}
                >
                  SherifIQ Platform
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.85rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    margin: '0.25rem 0 0 0',
                    textShadow: '0 1px 6px rgba(0,0,0,0.6)',
                  }}
                >
                  Intelligent Agent Workflow System
                </p>
              </div>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: hoveredCard === 'card-1' ? '#ffffff' : 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: hoveredCard === 'card-1' ? '#0a0a0a' : '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  transform: hoveredCard === 'card-1' ? 'scale(1.1) rotate(45deg)' : 'scale(1)',
                  flexShrink: 0,
                }}
              >
                <ArrowUpRight size={18} />
              </div>
            </div>
          </motion.div>

          {/* CARD 2: Portfolio Showcase */}
          <motion.div
            className="showcase-card-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onMouseEnter={() => setHoveredCard('card-2')}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={handleCardClick}
            style={{
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: '#141416',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '1.75rem',
              boxSizing: 'border-box',
            }}
          >
            <img
              src="/assets/image/projects/punniyakotti-portfolio.webp"
              alt="Creative Portfolio"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: 'translateZ(0)',
              }}
            />
            <img
              src="/assets/image/projects/punniyakotti-portfolio.webp"
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(100%)',
                opacity: hoveredCard === 'card-2' ? 0 : 1,
                transition: 'opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                willChange: 'opacity',
                transform: 'translateZ(0)',
              }}
            />

            <div
              style={{
                position: 'relative',
                zIndex: 10,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "'Acorn', 'Suisse Intl', 'Inter', sans-serif",
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    margin: 0,
                    color: '#ffffff',
                    textShadow: '0 2px 10px rgba(0,0,0,0.6)',
                  }}
                >
                  Portfolio Showcase
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.85rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    margin: '0.25rem 0 0 0',
                    textShadow: '0 1px 6px rgba(0,0,0,0.6)',
                  }}
                >
                  Fluid Motion & Custom 3D WebGL Experiences
                </p>
              </div>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: hoveredCard === 'card-2' ? '#ffffff' : 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: hoveredCard === 'card-2' ? '#0a0a0a' : '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  transform: hoveredCard === 'card-2' ? 'scale(1.1) rotate(45deg)' : 'scale(1)',
                  flexShrink: 0,
                }}
              >
                <ArrowUpRight size={18} />
              </div>
            </div>
          </motion.div>

          {/* CARD 3: Lumière Brand System */}
          <motion.div
            className="showcase-card-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onMouseEnter={() => setHoveredCard('card-3')}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={handleCardClick}
            style={{
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: '#141416',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '1.75rem',
              boxSizing: 'border-box',
            }}
          >
            <img
              src="/assets/image/projects/lumiere.webp"
              alt="Lumière System"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: 'translateZ(0)',
              }}
            />
            <img
              src="/assets/image/projects/lumiere.webp"
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(100%)',
                opacity: hoveredCard === 'card-3' ? 0 : 1,
                transition: 'opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                willChange: 'opacity',
                transform: 'translateZ(0)',
              }}
            />

            <div
              style={{
                position: 'relative',
                zIndex: 10,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "'Acorn', 'Suisse Intl', 'Inter', sans-serif",
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    margin: 0,
                    color: '#ffffff',
                    textShadow: '0 2px 10px rgba(0,0,0,0.6)',
                  }}
                >
                  Lumière Brand System
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.85rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    margin: '0.25rem 0 0 0',
                    textShadow: '0 1px 6px rgba(0,0,0,0.6)',
                  }}
                >
                  Modular Design Token Architecture
                </p>
              </div>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: hoveredCard === 'card-3' ? '#ffffff' : 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: hoveredCard === 'card-3' ? '#0a0a0a' : '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  transform: hoveredCard === 'card-3' ? 'scale(1.1) rotate(45deg)' : 'scale(1)',
                  flexShrink: 0,
                }}
              >
                <ArrowUpRight size={18} />
              </div>
            </div>
          </motion.div>

          {/* CARD 4: Helix Studio */}
          <motion.div
            className="showcase-card-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onMouseEnter={() => setHoveredCard('card-4')}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={handleCardClick}
            style={{
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: '#0d281e',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '1.75rem',
              boxSizing: 'border-box',
            }}
          >
            <img
              src="/assets/image/projects/helix.webp"
              alt="Helix Logo"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: 'translateZ(0)',
              }}
            />
            <img
              src="/assets/image/projects/helix.webp"
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(100%)',
                opacity: hoveredCard === 'card-4' ? 0 : 1,
                transition: 'opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                willChange: 'opacity',
                transform: 'translateZ(0)',
              }}
            />

            <div
              style={{
                position: 'relative',
                zIndex: 10,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "'Acorn', 'Suisse Intl', 'Inter', sans-serif",
                    fontSize: '1.45rem',
                    fontWeight: 700,
                    margin: 0,
                    color: '#ffffff',
                    lineHeight: 1.2,
                    textShadow: '0 2px 10px rgba(0,0,0,0.6)',
                  }}
                >
                  Helix Studio
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.85rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    margin: '0.25rem 0 0 0',
                    textShadow: '0 1px 6px rgba(0,0,0,0.6)',
                  }}
                >
                  Brand Identity & SaaS
                </p>
              </div>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: hoveredCard === 'card-4' ? '#ffffff' : 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: hoveredCard === 'card-4' ? '#0a0a0a' : '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  transform: hoveredCard === 'card-4' ? 'scale(1.1) rotate(45deg)' : 'scale(1)',
                  flexShrink: 0,
                }}
              >
                <ArrowUpRight size={18} />
              </div>
            </div>
          </motion.div>

          {/* CARD 5: HabitTrace App */}
          <motion.div
            className="showcase-card-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onMouseEnter={() => setHoveredCard('card-5')}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={handleCardClick}
            style={{
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: '#141416',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '1.75rem',
              boxSizing: 'border-box',
            }}
          >
            <img
              src="/assets/image/projects/habit-trace.webp"
              alt="HabitTrace Analytics"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: 'translateZ(0)',
              }}
            />
            <img
              src="/assets/image/projects/habit-trace.webp"
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(100%)',
                opacity: hoveredCard === 'card-5' ? 0 : 1,
                transition: 'opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                willChange: 'opacity',
                transform: 'translateZ(0)',
              }}
            />

            <div
              style={{
                position: 'relative',
                zIndex: 10,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "'Acorn', 'Suisse Intl', 'Inter', sans-serif",
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    margin: 0,
                    color: '#ffffff',
                    textShadow: '0 2px 10px rgba(0,0,0,0.6)',
                  }}
                >
                  HabitTrace App
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.85rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    margin: '0.25rem 0 0 0',
                    textShadow: '0 1px 6px rgba(0,0,0,0.6)',
                  }}
                >
                  Behavioral Analytics Platform
                </p>
              </div>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: hoveredCard === 'card-5' ? '#ffffff' : 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: hoveredCard === 'card-5' ? '#0a0a0a' : '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  transform: hoveredCard === 'card-5' ? 'scale(1.1) rotate(45deg)' : 'scale(1)',
                  flexShrink: 0,
                }}
              >
                <ArrowUpRight size={18} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM BUTTON CONTAINER */}
        <div
          style={{
            marginTop: '3.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="/projects"
              onClick={(e) => {
                e.preventDefault();
                handleCardClick();
              }}
              onMouseEnter={() => setIsViewAllHovered(true)}
              onMouseLeave={() => setIsViewAllHovered(false)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                backgroundColor: isViewAllHovered ? '#4e4d32' : '#62613F',
                color: '#ffffff',
                padding: '0.5rem 0.6rem 0.5rem 1.6rem',
                borderRadius: '100px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'background-color 0.3s ease, transform 0.2s ease',
                cursor: 'pointer',
                transform: isViewAllHovered ? 'translateY(-2px)' : 'translateY(0)',
              }}
            >
              <span>View All Projects</span>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  color: '#62613F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s ease',
                  transform: isViewAllHovered ? 'rotate(45deg)' : 'rotate(0deg)',
                }}
              >
                <ArrowUpRight size={18} />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
