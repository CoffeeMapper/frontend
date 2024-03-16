import React from 'react';

import styles from './Typography.module.css';

const variants = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subheading1: 'h6',
  subheading2: 'h6',
  body1: 'p',
  body2: 'p',
  span: 'span',

  DisplayLarge: 'h1',
  DisplayMedium: 'h1',
  DisplaySmall: 'h2',
  HeadlineLarge: 'h2',
  HeadlineMedium: 'h3',
  HeadlineSmall: 'h3',
  TitleLarge: 'h4',
  TitleMedium: 'h4',
  TitleSmall: 'h5',
  LabelLarge: 'h5',
  LabelMedium: 'h6',
  LabelSmall: 'h6',
  BodyLarge: 'p',
  BodyMedium: 'p',
  BodySmall: 'p',
};

type Variant = keyof typeof variants;

interface TypographyProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  variant?: Variant;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  color?: 'black' | 'white' | 'mindal' | 'green';
  bold?: boolean;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  style,
  className,
  tag,
  variant = 'body1',
  color = 'black',
  bold = false,
  ...props
}) => {
  const Tag = tag || variants[variant] || 'p';

  const classes = [
    styles.base,
    styles[variant],
    className,
    color && styles[color],
    bold && styles.bold,
  ]
    .filter(Boolean)
    .join(' ');

  return React.createElement(
    Tag,
    {
      className: classes,
      style,
      ...props,
    },
    children,
  );
};

export default Typography;
