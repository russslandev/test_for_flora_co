import React, { FC } from 'react';

interface IProps {
  label: string;
  selected: boolean;
  setSelected: (option: string) => void;
}

const RadioButton: FC<IProps> = ({ label, selected, setSelected }) => {
  return (
    <div onClick={() => setSelected(label)} className='flex mb-6 cursor-pointer'>
      <div className='mr-2 bg-text-dark w-6 h-6 rounded-full border-[1px] border-border-grey p-1.5 flex items-center justify-center'>
        {selected && <div className='rounded-full w-2.5 h-2.5 bg-basic-blue'></div>}
      </div>
      {label}
    </div>
  );
};

export default RadioButton;
