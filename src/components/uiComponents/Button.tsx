import React, { FC } from 'react';

interface IProps {
  onSubmit: any;
  label: string;
  className?: string;
}

const Button:FC<IProps> = ({onSubmit, label, className}) => {
  return (
    <button
      onClick={onSubmit}
      className={`${className && className} bg-basic-blue rounded-10px text-text-dark py-3 text-center mt-12 active:bg-basic-light-blue mb-3`}
    >
      {label}
    </button>
  );
};

export default Button;
