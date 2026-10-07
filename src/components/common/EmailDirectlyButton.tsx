import React, { useState } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

export interface EmailDirectlyButtonProps {
  href?: string;
  onClick?: () => void;
  text?: string;
  variant?: 'secondary' | 'outline' | 'light' | 'dark' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  showMailIcon?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const EmailDirectlyButton: React.FC<EmailDirectlyButtonProps> = ({
  href = 'mailto:rafiqsherffs@gmail.com',
  onClick,
  text = 'EMAIL DIRECTLY',
  variant = 'secondary',
  size = 'md',
  showMailIcon = true,
  className = '',
  style = {},
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Size configurations matching BookACallButton
  const sizeStyles = {
    sm: {
      padding: '0.35rem 0.4rem 0.35rem 0.95rem',
      fontSize: '0.68rem',
      gap: '0.55rem',
      circleSize: '24px',
      iconSize: 12,
      mailIconSize: 13,
    },
    md: {
      padding: '0.45rem 0.5rem 0.45rem 1.15rem',
      fontSize: '0.75rem',
      gap: '0.7rem',
      circleSize: '30px',
      iconSize: 14,
      mailIconSize: 15,
    },
    lg: {
      padding: '0.6rem 0.65rem 0.6rem 1.35rem',
      fontSize: '0.85rem',
      gap: '0.85rem',
      circleSize: '36px',
      iconSize: 16,
      mailIconSize: 17,
    },
  }[size];

  // Variant color configurations
  const variantStyles = {
    secondary: {
      bg: isHovered ? '#e4e4e7' : '#f4f4f5',
      color: '#0a0a0a',
      border: '1px solid rgba(10, 10, 10, 0.06)',
      circleBg: isHovered ? '#0a0a0a' : 'rgba(10, 10, 10, 0.08)',
      circleColor: isHovered ? '#ffffff' : '#0a0a0a',
      shadow: isHovered ? '0 6px 20px rgba(0, 0, 0, 0.06)' : 'none',
    },
    outline: {
      bg: 'transparent',
      color: isHovered ? '#ffffff' : '#0a0a0a',
      border: isHovered ? '1px solid #0a0a0a' : '1px solid rgba(10, 10, 10, 0.2)',
      circleBg: isHovered ? '#0a0a0a' : 'rgba(10, 10, 10, 0.08)',
      circleColor: isHovered ? '#ffffff' : '#0a0a0a',
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
    dark: {
      bg: isHovered ? '#18181b' : '#27272a',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      circleBg: isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.15)',
      circleColor: isHovered ? '#0a0a0a' : '#ffffff',
      shadow: 'none',
    },
    glass: {
      bg: isHovered ? 'rgba(255, 255, 255, 0.18)' : 'rgba(255, 255, 255, 0.1)',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      circleBg: isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.2)',
      circleColor: isHovered ? '#0a0a0a' : '#ffffff',
      shadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
    },
  }[variant];

  const Component = href ? 'a' : 'button';
  const componentProps = href ? { href } : { onClick, type: 'button' as const };

  return (
    <Component
      {...componentProps}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
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
        ...style,
      }}
    >
      {/* Optional Left Mail Icon */}
      {showMailIcon && (
        <Mail
          size={sizeStyles.mailIconSize}
          style={{
            flexShrink: 0,
            opacity: isHovered ? 1 : 0.85,
            transition: 'opacity 0.2s ease',
          }}
        />
      )}

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

export default EmailDirectlyButton;
