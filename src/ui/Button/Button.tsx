import React from 'react';
import Link from 'next/link';

import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  color?: 'black' | 'white' | 'mindal' | 'green';
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = 'black',
  onClick,
  href,
  disabled = false,
  className = '',
  style = {},
  ...attrs
}) => {
  const buttonContent = (
    <button
      {...attrs}
      className={`${styles.button} ${styles[color]} ${className}`}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );

  if (href && disabled) {
    return buttonContent;
  }

  if (href) {
    return (
      <Link
        className={`${styles.button} ${styles[color]} ${className}`}
        style={style}
        href={href}
      >
        {children}
      </Link>
    );
  }

  return buttonContent;
};

export default Button;
