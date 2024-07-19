"use client";

import React from 'react';

type ButtonProps = {
  onClick: () => void;
  label: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};
const Button: React.FC<ButtonProps> = ({ onClick, label, disabled = false, type = 'button', className = '' }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`px-4 py-2 rounded ${className} ${disabled ? 'bg-gray-400' : 'bg-[#DA6F51] hover:bg-blue-700'} text-white`}
    >
      {label}
    </button>
  );
};

export default Button;
