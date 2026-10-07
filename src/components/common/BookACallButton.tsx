import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface BookACallButtonProps {
  href?: string;
  onClick?: () => void;
  text?: string;
  variant?: 'dark' | 'light' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  style?: React.CSSProperties;
  target?: string;
  rel?: string;
}

export const BookACallButton: React.FC<BookACallButtonProps> = ({
  href = '#contact',
  onClick,
  text = 'BOOK A CALL',
  variant = 'dark',
  size = 'md',
  fullWidth = false,
  className = '',
  style = {},
  target,
  rel,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Size configurations
  const sizeStyles = {
    sm: {
      padding: '0.35rem 0.4rem 0.35rem 1rem',
      fontSize: '0.68rem',
      gap: '0.6rem',
      circleSize: '24px',
      iconSize: 12,
    },
    md: {
      padding: '0.45rem 0.5rem 0.45rem 1.25rem',
      fontSize: '0.75rem',
      gap: '0.75rem',
      circleSize: '30px',
      iconSize: 14,
    },
    lg: {
      padding: '0.6rem 0.65rem 0.6rem 1.5rem',
      fontSize: '0.85rem',
      gap: '0.9rem',
      circleSize: '36px',
      iconSize: 16,
    },
  }[size];

  // Variant color configurations
  const variantStyles = {
    dark: {
      bg: isHovered ? '#4F5033' : '#62613F',
      color: '#ffffff',
      border: 'none',
      circleBg: '#ffffff',
      circleColor: '#62613F',
      shadow: 'none',
    },
    light: {
      bg: '#ffffff',
      color: '#0a0a0a',
      border: '1px solid rgba(0, 0, 0, 0.08)',
      circleBg: isHovered ? '#0a0a0a' : 'rgba(0, 0, 0, 0.06)',
      circleColor: isHovered ? '#ffffff' : '#0a0a0a',
      shadow: isHovered ? '0 8px 24px rgba(0, 0, 0, 0.12)' : '0 4px 14px rgba(0, 0, 0, 0.05)',
    },
    outline: {
      bg: 'transparent',
      color: isHovered ? '#ffffff' : '#0a0a0a',
      border: isHovered ? '1px solid #0a0a0a' : '1px solid rgba(10, 10, 10, 0.2)',
      circleBg: isHovered ? '#0a0a0a' : 'rgba(10, 10, 10, 0.08)',
      circleColor: isHovered ? '#ffffff' : '#0a0a0a',
      shadow: 'none',
    },
    glass: {
      bg: isHovered ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.08)',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      circleBg: isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.2)',
      circleColor: isHovered ? '#0a0a0a' : '#ffffff',
      shadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
    },
  }[variant];

  const Component = href ? 'a' : 'button';
  const componentProps = href ? { href, target, rel } : { onClick, type: 'button' as const };

  return (
    <Component
      {...componentProps}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : 'auto',
        alignItems: 'center',
        justifyContent: fullWidth ? 'space-between' : 'center',
        borderRadius: '9999px',
        backgroundColor: variantStyles.bg,
        color: variantStyles.color,
        border: variantStyles.border,
        boxShadow: variantStyles.shadow,
        padding: sizeStyles.padding,
        gap: sizeStyles.gap,
        fontFamily: "'Inter', sans-serif",
        fontSize: sizeStyles.fontSize,
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: 'none',
        lineHeight: 1,
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {/* Button Text */}
      <span
        style={{
          whiteSpace: 'nowrap',
        }}
      >
        {text}
      </span>

      {/* Round Circle Badge with Arrow */}
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: sizeStyles.circleSize,
          height: sizeStyles.circleSize,
          borderRadius: '50%',
          backgroundColor: variantStyles.circleBg,
          color: variantStyles.circleColor,
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: isHovered ? 'rotate(45deg) scale(1.08)' : 'rotate(0deg) scale(1)',
          flexShrink: 0,
        }}
      >
        <ArrowUpRight
          size={sizeStyles.iconSize}
          style={{
            strokeWidth: 2.5,
            transition: 'transform 0.3s ease',
          }}
        />
      </span>
    </Component>
  );
};

export default BookACallButton;
