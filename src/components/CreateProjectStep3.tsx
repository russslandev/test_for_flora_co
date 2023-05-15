import React, { FC, useEffect, useState } from 'react';
import RadioButton from './uiComponents/RadioButton';
import Button from './uiComponents/Button';
import Input from './uiComponents/Input';
import { IProjectStepProps } from '../types';
import { productLaunchOptions } from '../constants';
import { createProject } from '../queries/createProject';
import { useNavigate } from 'react-router-dom';

const CreateProjectStep3: FC<IProjectStepProps> = ({ projectData, setCreateProjectStep, setProjectData }) => {
  const [err, setErr] = useState('');
  const nav = useNavigate()

  const incrWorkers = () => setProjectData({ ...projectData, workersAmount: projectData.workersAmount + 1 });
  const decrWorkers = () =>
    projectData.workersAmount - 1 >= 0 && setProjectData({ ...projectData, workersAmount: projectData.workersAmount - 1 });
  const setSelectedLaunchOption = (launch: string) => setProjectData({ ...projectData, launch });
  const setContactEmail = (contactEmail: string) => setProjectData({ ...projectData, contactEmail });

  const onSubmit = () => {
    if (!projectData.contactEmail || !projectData.contactEmail?.includes('@')) {
      setErr('Please enter a valid Email');
      return;
    }
    createProject(projectData);
    nav('/test_for_flora_co/projects');
  };

  const goBack = () => setCreateProjectStep(1);

  useEffect(() => {
    if (projectData.contactEmail.includes('@') && err) setErr('');
  }, [projectData.contactEmail, err]);

  return (
    <div>
      <header className='mb-6'>
        <div className='text-basic-blue text-sm'>Create Project</div>
        <div className=' text-3.5xl'>How many full-time workers on project?</div>
      </header>
      <div className='flex w-full items-center justify-center mb-6'>
        <div onClick={decrWorkers} className='py-3 px-5 rounded-10px bg-light-grey text-center cursor-pointer'>
          -
        </div>
        <div className='mx-4 py-3 bg-background-dark border-border-grey border-[1px] w-full rounded-10px text-center'>
          {projectData.workersAmount}
        </div>
        <div onClick={incrWorkers} className='py-3 px-5 rounded-10px bg-light-grey text-center cursor-pointer'>
          +
        </div>
      </div>
      <div>
        <div className=' text-3.5xl mb-6'>How many full-time workers on project?</div>
        {productLaunchOptions.map((option) => (
          <RadioButton key={option} label={option} selected={projectData.launch === option} setSelected={setSelectedLaunchOption} />
        ))}
      </div>
      <div>
        <div className=' text-3.5xl mb-6'>Contact Email</div>
        <Input placeholder='example@gmail.com' value={projectData.contactEmail} setValue={setContactEmail} />
      </div>
      <div className='flex justify-center'>
        <Button label='Back' onSubmit={goBack} className='bg-light-grey active:bg-light-grey w-1/2 mr-4 text-white' />
        <Button label='Create Project' onSubmit={onSubmit} className=' w-1/2' />
      </div>
      {err && <div className='text-red-600 text-sm text-center '>{err}</div>}
    </div>
  );
};

export default CreateProjectStep3;
