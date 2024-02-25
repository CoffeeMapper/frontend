// components/Button.tsx
import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  color?: 'black' |'white' | 'mindal' | 'green' ;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = 'black',
  onClick,
  href,
  disabled = false,
  ...attrs
}) => {
  const buttonContent = (
    <button
      {...attrs}
      className={`${styles.button} ${styles[color]}`}
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
      <Link className={`${styles.button} ${styles[color]}`} href={href}>
        {children}
      </Link>
    );
  }

  return buttonContent;
};

export default Button;
