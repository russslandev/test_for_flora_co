import React, { FC } from 'react';

interface IProps {
  createProjectStep: number;
}

const MobileProgressBar: FC<IProps> = ({ createProjectStep }) => (
  <div className='flex items-center justify-center mt-10 mb-5'>
    <div className={`transition-all w-2 h-2 rounded-full mx-1 ${createProjectStep > 0 ? 'bg-basic-blue' : 'bg-white'}`}></div>
    <div className={`transition-all w-10 h-[2px] ${createProjectStep > 0 ? 'bg-basic-blue' : 'bg-white opacity-30'}`}></div>
    <div
      className={`transition-all w-2 h-2 rounded-full mx-1 ${
        createProjectStep === 1 ? 'bg-white' : createProjectStep > 1 ? 'bg-basic-blue' : 'bg-white opacity-30'
      }`}
    ></div>
    <div className={`transition-all w-10 h-[2px] ${createProjectStep > 1 ? 'bg-basic-blue' : 'bg-white opacity-30'}`}></div>
    <div className={`transition-all w-2 h-2 bg-white rounded-full mx-1 ${createProjectStep < 2 && 'opacity-30'}`}></div>
  </div>
);

export default MobileProgressBar;
