import React, { FC } from 'react';
import bgImage from '../../assets/bg.svg';

interface IProps {
  createProjectStep: number;
}

const DesktopProgressBar: FC<IProps> = ({ createProjectStep }) => (
  <div className='relative h-screen whitespace-nowrap pr-24 border-r-[1px] border-border-grey'>
    <div className='flex flex-col items-start justify-center mt-18 mb-5'>
      <div className='flex items-center'>
        <div className={`transition-all w-2 h-2 rounded-full m-1 ${createProjectStep > 0 ? 'bg-basic-blue' : 'bg-white'}`}></div>
        <div className={`transition-all ${createProjectStep > 0 ? 'text-basic-blue' : ''}`}>Start First Project</div>
      </div>

      <div className={`transition-all mx-[7px] h-10 w-[2px] ${createProjectStep > 0 ? 'bg-basic-blue' : 'bg-white opacity-30'}`}></div>

      <div className='flex items-center'>
        <div
          className={`transition-all w-2 h-2 rounded-full m-1 ${
            createProjectStep === 1 ? 'bg-white' : createProjectStep > 1 ? 'bg-basic-blue' : 'bg-white opacity-30'
          }`}
        ></div>
        <div className={`transition-all ${createProjectStep === 1 ? '' : createProjectStep > 1 ? 'text-basic-blue' : 'opacity-30'}`}>
          Project Details
        </div>
      </div>

      <div className={`transition-all mx-[7px] h-10 w-[2px] ${createProjectStep > 1 ? 'bg-basic-blue' : 'bg-white opacity-30'}`}></div>
      <div className='flex items-center'>
        <div className={`transition-all w-2 h-2 bg-white rounded-full m-1 ${createProjectStep < 2 && 'opacity-30'}`}></div>
        <div className={`transition-all ${createProjectStep < 2 && 'opacity-30'}`}>Create Project</div>
      </div>
    </div>
    <img src={bgImage} className='absolute bottom-0'/>
  </div>
);

export default DesktopProgressBar;
