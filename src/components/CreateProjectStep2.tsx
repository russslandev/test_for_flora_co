import React, { FC } from 'react';
import RadioButton from './uiComponents/RadioButton';
import Button from './uiComponents/Button';
import { IProjectStepProps } from '../types';
import { projectGoals } from '../constants';

const CreateProjectStep2: FC<IProjectStepProps> = ({ projectData, setCreateProjectStep, setProjectData }) => {
  const setSelectedGoal = (selectedGoal: string) => setProjectData({ ...projectData, selectedGoal });
  const onSubmit = () => setCreateProjectStep(2);
  const goBack = () => setCreateProjectStep(0);

  return (
    <div>
      <header className='mb-6'>
        <div className='text-basic-blue text-sm'>Project Details</div>
        <div className=' text-3.5xl'>What is your main goal with AlphaQuest?</div>
      </header>
      <div>
        {projectGoals.map((goal) => (
          <RadioButton key={goal} label={goal} selected={projectData.selectedGoal === goal} setSelected={setSelectedGoal} />
        ))}
      </div>
      <div className='flex justify-center'>
        <Button label='Back' onSubmit={goBack} className='bg-light-grey active:bg-light-grey w-1/2 mr-4 text-white' />
        <Button label='Continue' onSubmit={onSubmit} className=' w-1/2' />
      </div>
    </div>
  );
};

export default CreateProjectStep2;
