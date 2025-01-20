import { InputProperties } from '@/interface/InputBox';
import React from 'react';

const InputBox: React.FC<InputProperties> = ({
  type = 'text',
  name = '',
  id = '',
  placeholder = '',
  value,
  checked,
  onChange,
  error,
  onBlur,
}) => {
  return (
    <input
      className={
        type !== 'radio' && type !== 'checkbox'
          ? `border rounded-md px-2 py-2 text-gray-700 focus:outline-none cursor-pointer 
             focus:ring-2 ${
               error ? 'focus:ring-red-500' : 'focus:ring-blue-500/40'
             } 
             focus:border-blue-400 ${
               error ? 'border-red-500 focus:border-red-500' : ''
             }`
          : 'border rounded-md px-3 py-3 text-gray-700 focus:outline-none cursor-pointer '
      }
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      checked={checked}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default InputBox;
