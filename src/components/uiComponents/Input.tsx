import React, { FC } from 'react';

interface IProps {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
}

const Input: FC<IProps> = ({ value, setValue, placeholder }) => {
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder ? placeholder : 'Type something'}
      className='w-full bg-input-grey border-border-grey border-[1px] rounded-10px py-3 px-4 outline-none'
    ></input>
  );
};

export default Input;
