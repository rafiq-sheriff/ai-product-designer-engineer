import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export type ScribbleType =
  | 'flow-curve'
  | 'loop-swirl'
  | 'star-burst'
  | 'zigzag-ribbon'
  | 'crown-doodle'
  | 'hand-circle'
  | 'underline-swoosh'
  | 'infinity-loop'
  | 'sparkle';

interface ScribbleDecorationProps {
  type: ScribbleType;
  color?: string;
  strokeWidth?: number;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  className?: string;
  animatedOnScroll?: boolean;
  opacity?: number;
}

export const ScribbleDecoration: React.FC<ScribbleDecorationProps> = ({
  type,
  color = '#62613F',
  strokeWidth = 14,
  width = 300,
  height = 300,
  style,
  className,
  animatedOnScroll = true,
  opacity = 0.85,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const pathLength = useTransform(scrollYProgress, [0.05, 0.45], [0, 1]);

  const renderPath = () => {
    switch (type) {
      case 'flow-curve':
        return (
          <svg viewBox="0 0 340 580" fill="none" width="100%" height="100%">
            <motion.path
              d="M 220 -40 C 40 100 340 280 60 540"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              {...(animatedOnScroll
                ? { style: { pathLength } }
                : {
                    initial: { pathLength: 0 },
                    whileInView: { pathLength: 1 },
                    viewport: { once: true },
                    transition: { duration: 1.2, ease: 'easeInOut' },
                  })}
            />
          </svg>
        );

      case 'loop-swirl':
        return (
          <svg viewBox="0 0 300 200" fill="none" width="100%" height="100%">
            <motion.path
              d="M 20 100 C 60 20 140 20 120 110 C 100 180 40 160 80 80 C 120 0 240 40 280 140"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              {...(animatedOnScroll
                ? { style: { pathLength } }
                : {
                    initial: { pathLength: 0 },
                    whileInView: { pathLength: 1 },
                    viewport: { once: true },
                    transition: { duration: 1.4, ease: 'easeInOut' },
                  })}
            />
          </svg>
        );

      case 'star-burst':
        return (
          <svg viewBox="0 0 120 120" fill="none" width="100%" height="100%">
            <motion.path
              d="M 60 10 L 60 110 M 10 60 L 110 60 M 24 24 L 96 96 M 24 96 L 96 24"
              stroke={color}
              strokeWidth={Math.max(4, strokeWidth / 2)}
              strokeLinecap="round"
              {...(animatedOnScroll
                ? { style: { pathLength } }
                : {
                    initial: { pathLength: 0 },
                    whileInView: { pathLength: 1 },
                    viewport: { once: true },
                    transition: { duration: 0.8, ease: 'easeOut' },
                  })}
            />
          </svg>
        );

      case 'sparkle':
        return (
          <svg viewBox="0 0 100 100" fill="none" width="100%" height="100%">
            <motion.path
              d="M 50 5 Q 50 50 95 50 Q 50 50 50 95 Q 50 50 5 50 Q 50 50 50 5 Z"
              stroke={color}
              strokeWidth={Math.max(3, strokeWidth / 3)}
              fill={`${color}15`}
              strokeLinecap="round"
              strokeLinejoin="round"
              {...(animatedOnScroll
                ? { style: { pathLength } }
                : {
                    initial: { pathLength: 0 },
                    whileInView: { pathLength: 1 },
                    viewport: { once: true },
                    transition: { duration: 1, ease: 'easeInOut' },
                  })}
            />
          </svg>
        );

      case 'zigzag-ribbon':
        return (
          <svg viewBox="0 0 400 160" fill="none" width="100%" height="100%">
            <motion.path
              d="M 10 80 Q 70 10 130 90 T 250 80 T 390 70"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              {...(animatedOnScroll
                ? { style: { pathLength } }
                : {
                    initial: { pathLength: 0 },
                    whileInView: { pathLength: 1 },
                    viewport: { once: true },
                    transition: { duration: 1.2, ease: 'easeInOut' },
                  })}
            />
          </svg>
        );

      case 'crown-doodle':
        return (
          <svg viewBox="0 0 200 120" fill="none" width="100%" height="100%">
            <motion.path
              d="M 20 100 L 10 30 L 70 70 L 100 10 L 130 70 L 190 30 L 180 100 Z M 15 105 C 60 115 140 115 185 105"
              stroke={color}
              strokeWidth={Math.max(4, strokeWidth / 2.5)}
              strokeLinecap="round"
              strokeLinejoin="round"
              {...(animatedOnScroll
                ? { style: { pathLength } }
                : {
                    initial: { pathLength: 0 },
                    whileInView: { pathLength: 1 },
                    viewport: { once: true },
                    transition: { duration: 1.1, ease: 'easeInOut' },
                  })}
            />
          </svg>
        );

      case 'hand-circle':
        return (
          <svg viewBox="0 0 200 200" fill="none" width="100%" height="100%">
            <motion.path
              d="M 100 20 C 160 15 190 60 185 115 C 180 170 130 190 75 180 C 20 170 15 110 30 60 C 45 15 110 10 170 30"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              {...(animatedOnScroll
                ? { style: { pathLength } }
                : {
                    initial: { pathLength: 0 },
                    whileInView: { pathLength: 1 },
                    viewport: { once: true },
                    transition: { duration: 1.3, ease: 'easeInOut' },
                  })}
            />
          </svg>
        );

      case 'underline-swoosh':
        return (
          <svg viewBox="0 0 350 70" fill="none" width="100%" height="100%">
            <motion.path
              d="M 10 30 Q 180 65 340 15 M 40 50 Q 190 75 310 35"
              stroke={color}
              strokeWidth={Math.max(5, strokeWidth / 2)}
              strokeLinecap="round"
              strokeLinejoin="round"
              {...(animatedOnScroll
                ? { style: { pathLength } }
                : {
                    initial: { pathLength: 0 },
                    whileInView: { pathLength: 1 },
                    viewport: { once: true },
                    transition: { duration: 1, ease: 'easeInOut' },
                  })}
            />
          </svg>
        );

      case 'infinity-loop':
        return (
          <svg viewBox="0 0 320 160" fill="none" width="100%" height="100%">
            <motion.path
              d="M 80 80 C 10 10 10 150 80 80 C 150 10 310 10 240 80 C 170 150 10 150 80 80 Z"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              {...(animatedOnScroll
                ? { style: { pathLength } }
                : {
                    initial: { pathLength: 0 },
                    whileInView: { pathLength: 1 },
                    viewport: { once: true },
                    transition: { duration: 1.5, ease: 'easeInOut' },
                  })}
            />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        zIndex: 0,
        opacity,
        width,
        height,
        ...style,
      }}
    >
      {renderPath()}
    </div>
  );
};
