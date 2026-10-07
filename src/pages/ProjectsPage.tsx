import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ChevronDown, ArrowLeft } from 'lucide-react';
import { Contact } from '../components/sections/contact/Contact';
import { BookACallButton } from '../components/common/BookACallButton';

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  category: string;
  type: string;
  image: string;
  description: string;
  link: string;
}

export const allProjects: ProjectItem[] = [
  {
    id: 'lumiere',
    title: 'Lumiere',
    year: '2026',
    category: 'E-Commerce',
    type: 'Website',
    image: '/assets/image/projects/lumiere.webp',
    description: 'High-end luxury e-commerce experience with fluid motion and modular design token architecture.',
    link: 'https://lumiere-sherifiq.vercel.app/',
  },
  {
    id: 'forma',
    title: 'Forma',
    year: '2026',
    category: 'Interior Design',
    type: 'Website',
    image: '/assets/image/projects/forma.webp',
    description: 'Modern interior design studio showcasing architectural spaces and curated material design.',
    link: 'https://interior-design-sherifiq.vercel.app/',
  },
  {
    id: 'helix-ai',
    title: 'Helix AI',
    year: '2025',
    category: 'IT',
    type: 'Website',
    image: '/assets/image/projects/helix.webp',
    description: 'AI product engineering and intelligent design systems built for modern tech enterprises.',
    link: 'https://helix-ai.ascodelabs.com/',
  },
  {
    id: 'sh-health-centre',
    title: 'S H Health Centre',
    year: '2026',
    category: 'Healthcare',
    type: 'Website',
    image: '/assets/image/projects/s-h-health-center.webp',
    description: 'Comprehensive digital healthcare center platform for patient bookings and medical care.',
    link: 'https://shhealthcentre.com/',
  },
  {
    id: 'ams-platform',
    title: 'AMS Platform',
    year: '2026',
    category: 'Enterprise',
    type: 'SaaS',
    image: '/assets/image/projects/ams.webp',
    description: 'Enterprise asset and attendance tracking SaaS platform with real-time analytics.',
    link: 'https://attendance-fixed-frontend.vercel.app/',
  },
  {
    id: 'sherifiq-website',
    title: 'Sherifiq Website',
    year: '2026',
    category: 'IT',
    type: 'Website',
    image: '/assets/image/projects/sherifiq.webp',
    description: 'Official digital studio and technology consulting platform for high-performance web products.',
    link: 'https://www.sherifiq.in',
  },
  {
    id: 'punniyakotti-portfolio',
    title: 'Punniyakotti Portfolio',
    year: '2026',
    category: 'Personal',
    type: 'Website',
    image: '/assets/image/projects/punniyakotti-portfolio.webp',
    description: 'Custom creative developer portfolio featuring dynamic WebGL shaders and interactive typography.',
    link: 'https://punniyakotti-portfolio.vercel.app',
  },
  {
    id: 'personal-portfolio-v2',
    title: 'Personal Portfolio v2',
    year: '2026',
    category: 'Personal',
    type: 'Website',
    image: '/assets/image/projects/portfolio.webp',
    description: 'Interactive developer portfolio featuring dynamic WebGL animations and micro-interactions.',
    link: 'https://rafiqsheriff-portfolio.vercel.app',
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    year: '2025',
    category: 'Personal',
    type: 'Website',
    image: '/assets/image/projects/personal-portfolio-2.webp',
    description: 'Personal creative web developer portfolio exploring typography and fluid scroll effects.',
    link: 'https://rafiq-sheriff-portfolio.vercel.app/',
  },
  {
    id: 'habit-trace',
    title: 'Habit Trace',
    year: '2026',
    category: 'Productivity',
    type: 'Web Application',
    image: '/assets/image/projects/habit-trace.webp',
    description: 'Behavioral habit tracking web application with streak analytics and goal progress.',
    link: 'https://habit-trace.vercel.app/',
  },
  {
    id: 'as-codelabs',
    title: 'AS Codelabs',
    year: '2026',
    category: 'IT',
    type: 'Website',
    image: '/assets/image/projects/a-s-codelabs.webp',
    description: 'Software development studio landing experience with 3D interactions and product showcases.',
    link: 'https://ascodelabs.com/',
  },
  {
    id: 'analytics-avenue',
    title: 'Analytics Avenue',
    year: '2026',
    category: 'EdTech',
    type: 'Website',
    image: '/assets/image/projects/analytics-avenue.webp',
    description: 'Educational technology platform offering data analytics courses and interactive learning dashboards.',
    link: 'https://analyticsavenue.in/',
  },
];

const categories = ['All Projects', ...Array.from(new Set(allProjects.map((p) => p.category)))] as string[];

interface ProjectsPageProps {
  onBackToHome?: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onBackToHome }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const filteredProjects =
    selectedCategory === 'All Projects'
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', width: '100%', color: '#0a0a0a' }}>
      <style>{`
        .projects-main-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 8.5rem 2rem 6rem 2rem;
          box-sizing: border-box;
        }
        .projects-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .projects-card {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 3rem;
          align-items: center;
          padding: 2.75rem 3rem;
          box-sizing: border-box;
        }
        .projects-card-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          width: 100%;
        }
        .projects-card-title {
          font-family: 'Acorn', 'Inter', sans-serif;
          font-size: clamp(2.5rem, 4.5vw, 3.8rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.05;
          color: #0a0a0a;
          margin: 0 0 1.75rem 0;
          text-align: center;
          word-break: break-word;
          overflow-wrap: break-word;
          width: 100%;
        }
        .projects-card-pills {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          flex-wrap: wrap;
          margin-bottom: 2.75rem;
          width: 100%;
        }
        .projects-pill {
          background-color: #f1f3f5;
          color: #343a40;
          padding: 0.45rem 1.15rem;
          border-radius: 9999px;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.01em;
        }
        .projects-card-cta {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .projects-card-img-container {
          position: relative;
          width: 100%;
          height: 380px;
          border-radius: 20px;
          overflow: hidden;
          background-color: #e9ecef;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        @media (max-width: 992px) {
          .projects-main-container {
            padding: 6.5rem 1.25rem 4rem 1.25rem !important;
          }
          .projects-header-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.25rem !important;
            margin-bottom: 2.25rem !important;
          }
          .projects-title-block {
            flex-wrap: wrap !important;
            gap: 0.75rem !important;
          }
          .projects-filter-wrapper {
            width: 100% !important;
          }
          .projects-filter-button {
            width: 100% !important;
            justify-content: space-between !important;
          }
          .projects-dropdown-panel {
            width: 100% !important;
            left: 0 !important;
            right: 0 !important;
          }
          .projects-card {
            display: flex !important;
            flex-direction: column !important;
            padding: 1.5rem 1.25rem !important;
            gap: 1.25rem !important;
            border-radius: 20px !important;
          }
          .projects-card-img-container {
            order: 1 !important;
            height: 230px !important;
            border-radius: 16px !important;
          }
          .projects-card-content {
            order: 2 !important;
            width: 100% !important;
            align-items: center !important;
            text-align: center !important;
          }
          .projects-card-title {
            font-size: clamp(1.6rem, 5.5vw, 2.4rem) !important;
            margin-bottom: 0.85rem !important;
            text-align: center !important;
          }
          .projects-card-pills {
            margin-bottom: 1.5rem !important;
            gap: 0.5rem !important;
            justify-content: center !important;
          }
          .projects-pill {
            padding: 0.35rem 0.85rem !important;
            font-size: 0.78rem !important;
          }
          .projects-card-cta {
            width: 100% !important;
          }
        }

        @media (max-width: 576px) {
          .projects-main-container {
            padding: 5.5rem 1rem 3rem 1rem !important;
          }
          .projects-card-img-container {
            height: 200px !important;
          }
        }
      `}</style>

      {/* MAIN CONTAINER */}
      <div className="projects-main-container">
        {/* BACK TO HOME NAVIGATION BUTTON */}
        <div style={{ marginBottom: '2rem' }}>
          <button
            onClick={() => {
              if (onBackToHome) {
                onBackToHome();
              } else {
                window.history.pushState(null, '', '/');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: 'rgba(10, 10, 10, 0.05)',
              border: '1px solid rgba(10, 10, 10, 0.08)',
              padding: '0.5rem 1.1rem',
              borderRadius: '9999px',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.8rem',
              fontWeight: 600,
              color: '#0a0a0a',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0a0a0a';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(10, 10, 10, 0.05)';
              e.currentTarget.style.color = '#0a0a0a';
            }}
          >
            <ArrowLeft size={16} />
            <span>BACK TO HOME</span>
          </button>
        </div>

        {/* PAGE HEADER ROW: TITLE & FILTER DROPDOWN */}
        <div className="projects-header-row">
          {/* LEFT: TITLE & COUNT BADGE */}
          <div className="projects-title-block" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <h1
              style={{
                fontFamily: "'Acorn', 'Inter', sans-serif",
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                margin: 0,
                color: '#0a0a0a',
                lineHeight: 1.05,
              }}
            >
              Selected Works
            </h1>

            {/* Showing Count Pill */}
            <span
              style={{
                backgroundColor: '#e9ecef',
                color: '#495057',
                padding: '0.4rem 0.9rem',
                borderRadius: '9999px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.02em',
                display: 'inline-block',
                marginTop: '0.2rem',
              }}
            >
              Showing {filteredProjects.length} of {allProjects.length}
            </span>
          </div>

          {/* RIGHT: FILTER CATEGORY DROPDOWN MENU */}
          <div className="projects-filter-wrapper" style={{ position: 'relative' }}>
            <button
              className="projects-filter-button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(0, 0, 0, 0.09)',
                borderRadius: '18px',
                padding: '0.65rem 1.25rem',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'border-color 0.2s ease, boxShadow 0.2s ease',
              }}
            >
              {/* Filter Icon inside circle */}
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#f1f3f5',
                  color: '#495057',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Filter size={15} />
              </div>

              {/* Text Group */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span
                  style={{
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: '#868e96',
                    fontFamily: "'Inter', sans-serif",
                    textTransform: 'uppercase',
                  }}
                >
                  FILTER CATEGORY
                </span>
                <span
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: '#0a0a0a',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {selectedCategory}
                </span>
              </div>

              {/* Category Count Badge Pill */}
              <span
                style={{
                  backgroundColor: '#f1f3f5',
                  color: '#495057',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '9999px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  marginLeft: '0.5rem',
                }}
              >
                {filteredProjects.length}
              </span>

              {/* Chevron Arrow */}
              <ChevronDown
                size={18}
                style={{
                  color: '#868e96',
                  transition: 'transform 0.25s ease',
                  transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </button>

            {/* DROPDOWN MENU PANEL */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  className="projects-dropdown-panel"
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    right: 0,
                    width: '240px',
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: '0 16px 40px -10px rgba(0, 0, 0, 0.15)',
                    padding: '0.5rem',
                    zIndex: 50,
                  }}
                >
                  {categories.map((cat) => {
                    const count =
                      cat === 'All Projects'
                        ? allProjects.length
                        : allProjects.filter((p) => p.category === cat).length;
                    const isSelected = selectedCategory === cat;

                    return (
                      <button
                        key={cat}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setIsDropdownOpen(false);
                        }}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.65rem 1rem',
                          borderRadius: '10px',
                          border: 'none',
                          backgroundColor: isSelected ? '#f1f3f5' : 'transparent',
                          color: isSelected ? '#0a0a0a' : '#495057',
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.88rem',
                          fontWeight: isSelected ? 700 : 500,
                          cursor: 'pointer',
                          transition: 'backgroundColor 0.15s ease',
                          textAlign: 'left',
                        }}
                        onMouseEnter={(e) => {
                          if (!isSelected) e.currentTarget.style.backgroundColor = '#f8f9fa';
                        }}
                        onMouseLeave={(e) => {
                          if (!isSelected) e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <span>{cat}</span>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: isSelected ? '#0a0a0a' : '#adb5bd',
                          }}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* PROJECTS CARDS LIST */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isHovered = hoveredCardId === project.id;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  onMouseEnter={() => setHoveredCardId(project.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  className="projects-card"
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '28px',
                    boxSizing: 'border-box',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    boxShadow: '0 12px 36px -8px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  }}
                >
                  {/* IMAGE BLOCK */}
                  <div className="projects-card-img-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                        transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                      }}
                    />
                  </div>

                  {/* CONTENT BLOCK */}
                  <div className="projects-card-content">
                    <h2 className="projects-card-title">{project.title}</h2>

                    <div className="projects-card-pills">
                      <span className="projects-pill">{project.year}</span>
                      <span className="projects-pill">{project.category}</span>
                      <span className="projects-pill">{project.type}</span>
                    </div>

                    <div className="projects-card-cta">
                      <BookACallButton
                        text="VIEW PROJECT"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="dark"
                        size="md"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* FOOTER */}
      <Contact />
    </div>
  );
};

export default ProjectsPage;
