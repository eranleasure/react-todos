import React from 'react';

interface IButtonProps {
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
  className?: string;
  color?: 'primary' | 'secondary' | 'accent' | 'ghost';
  shape?: 'square' | 'circle';
  size?: 'xs' | 'sm' | 'lg';
  isActive?: boolean;
  onClick?: () => void;
}

type TButtonColorClass =
  | 'btn-primary'
  | 'btn-secondary'
  | 'btn-accent'
  | 'btn-ghost'
  | '';

type TButtonSizeClass = 'btn-xs' | 'btn-sm' | 'btn-lg' | '';

type TButtonShapeClass = 'btn-square' | 'btn-circle' | '';

const Button = ({
  children,
  type,
  className,
  color,
  shape,
  size,
  isActive,
  onClick,
}: IButtonProps) => {
  const buttonColorClass: TButtonColorClass = color ? `btn-${color}` : '';
  const buttonSizeClass: TButtonSizeClass = size ? `btn-${size}` : '';
  const buttonShapeClass: TButtonShapeClass = shape ? `btn-${shape}` : '';

  return (
    <button
      type={type}
      className={`btn ${buttonColorClass} ${buttonShapeClass} ${buttonSizeClass} ${
        className ? className : ''
      } ${isActive ? 'btn-active' : ''}`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
