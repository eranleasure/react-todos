import React from 'react';

interface IModalProps {
  children: React.ReactNode;
  className?: string;
}

const Modal = ({
  children,
  className,
}: IModalProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`modal ${className}`}>
      <div className='modal-box'>{children}</div>
    </div>
  );
};

export default Modal;
