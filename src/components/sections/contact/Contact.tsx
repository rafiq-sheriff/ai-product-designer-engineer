import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, ArrowUp } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rafiqsherffs@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      style={{
        width: '100%',
        backgroundColor: '#050505',
        color: '#ffffff',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '6rem 3.5rem 2.5rem 3.5rem',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
        userSelect: 'none',
      }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '5rem',
        }}
      >
        {/* TOP BRANDING & STATUS BAR */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          {/* Availability Badge */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.5rem 1.1rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#22c55e',
                  boxShadow: '0 0 10px #22c55e',
                }}
              />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.72rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontWeight: 600,
                }}
              >
                AVAILABLE FOR NEW PROJECTS & FULL-TIME ROLES
              </span>
            </div>
          </div>

          {/* Giant Brand Name */}
          <h2
            style={{
              fontFamily: "'Acorn', 'Syne', 'Space Grotesk', sans-serif",
              fontSize: 'clamp(3.2rem, 9vw, 8rem)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              margin: 0,
            }}
          >
            RAFIQ SHERIFF
          </h2>
        </div>

        {/* MIDDLE GRID COLUMNS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            paddingTop: '3rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* COLUMN 1: NAVIGATION */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h4
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.45)',
                fontWeight: 700,
                margin: 0,
              }}
            >
              NAVIGATION
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Showcase', href: '#showcase' },
                { label: 'Process', href: '#process' },
                { label: 'Services', href: '#services' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.75)',
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'color 0.2s ease, transform 0.2s ease',
                    display: 'inline-block',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: SOCIAL CHANNELS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h4
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.45)',
                fontWeight: 700,
                margin: 0,
              }}
            >
              SOCIALS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rafiq-sheriff' },
                { label: 'Behance', href: 'https://www.behance.net/rafiqsheriff1' },
                { label: 'GitHub', href: 'https://github.com/rafiq-sheriff' },
                { label: 'WhatsApp', href: 'https://wa.me/919150865313' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.75)',
                    textDecoration: 'none',
                    fontWeight: 500,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    transition: 'color 0.2s ease, transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <span>{social.label}</span>
                  <ArrowUpRight size={14} opacity={0.6} />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 3: LOCATION */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h4
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.45)',
                fontWeight: 700,
                margin: 0,
              }}
            >
              LOCATION
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.95rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 600,
                }}
              >
                Chennai, India
              </span>
            </div>
          </div>

          {/* COLUMN 4: DIRECT EMAIL & COPY BUTTON */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h4
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.45)',
                fontWeight: 700,
                margin: 0,
              }}
            >
              SAY HELLO
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a
                href="mailto:rafiqsherffs@gmail.com"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                  paddingBottom: '4px',
                  display: 'inline-block',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                rafiqsherffs@gmail.com
              </a>

              <button
                onClick={handleCopyEmail}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 1.1rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease, transform 0.15s ease',
                  width: 'fit-content',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.16)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)')}
              >
                {copied ? <Check size={14} color="#22c55e" /> : <Copy size={14} />}
                <span>{copied ? 'EMAIL COPIED!' : 'COPY EMAIL'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & BACK TO TOP BAR */}
        <div
          style={{
            paddingTop: '2.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            fontSize: '0.75rem',
            color: 'rgba(255, 255, 255, 0.45)',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
          }}
        >
          <span>© {new Date().getFullYear()} RAFIQ SHERIFF. ALL RIGHTS RESERVED.</span>

          <span>CRAFTED WITH PRECISION & PASSION</span>

          <button
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: 'transparent',
              border: 'none',
              color: '#ffffff',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              cursor: 'pointer',
              padding: 0,
              transition: 'transform 0.2s ease, opacity 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.opacity = '0.8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.opacity = '1';
            }}
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Contact;


