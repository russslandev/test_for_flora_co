import React, { FC, useRef } from 'react';

interface IProps {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
}

const InputWithStaticPlaceholder: FC<IProps> = ({ value, setValue, placeholder }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className='w-full bg-input-grey border-border-grey border-[1px] rounded-10px py-3 px-4 flex flex-nowrap'>
    <span onClick={() => inputRef.current?.focus()} className='opacity-30'>{placeholder}</span>
    <input ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} className='bg-input-grey outline-none w-3/4'></input>
  </div>
  );
};
export default InputWithStaticPlaceholder;
