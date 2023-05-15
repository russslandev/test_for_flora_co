import React, { FC, useEffect, useState } from 'react';
import Button from './uiComponents/Button';
import Input from './uiComponents/Input';
import InputWithStaticPlaceholder from './uiComponents/InputWithStaticPlaceholder';
import { IProjectStepProps } from '../types';
import { categories } from '../constants';



const CreateProjectStep1: FC<IProjectStepProps> = ({ projectData, setProjectData, setCreateProjectStep }) => {
  const [err, setErr] = useState('');

  const setProjectName = (projectName: string) => setProjectData({ ...projectData, projectName });
  const setProjectUrl = (projectUrl: string) => setProjectData({ ...projectData, projectUrl });
  const setSelectedCategory = (selectedCategory: string) => setProjectData({ ...projectData, selectedCategory });

  const onSubmit = () => {
    if (!projectData.projectName || !projectData.projectUrl) {
      setErr('Please enter all fields');
      return;
    }
    if (!projectData.selectedCategory) {
      setErr('Please choose category');
      return;
    }
    setCreateProjectStep(1);
  };

  useEffect(() => {
    if (projectData.projectName && projectData.projectUrl && projectData.selectedCategory && err) setErr('');
  }, [projectData.projectName, projectData.projectUrl, projectData.selectedCategory, err]);

  return (
    <div>
      <header className='mb-6'>
        <div className='text-basic-blue text-sm'>To Create Quest you need firstly create Project</div>
        <div className=' text-3.5xl'>Add New Project</div>
      </header>
      <div>
        <div className='mb-6'>
          <div className='mb-2'>{'Project Name (It can be changed later)'}</div>
          <Input placeholder='Awesome NFT Punch' value={projectData.projectName} setValue={setProjectName} />
        </div>
        <div className='mb-6'>
          <div className='mb-2'>{'Project URL (It cannot be changed after creation)'}</div>
          <InputWithStaticPlaceholder placeholder='Alphaguilty.io/' value={projectData.projectUrl} setValue={setProjectUrl} />
        </div>
        <div>
          <div className='mb-2'>{'Project Category (It cannot be changed after creation)'}</div>
          <div className='flex flex-wrap'>
            {categories.map((category) => (
              <span
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`py-1.5 px-3 mr-3 mb-3 transition-colors cursor-pointer ${
                  category === projectData.selectedCategory ? 'bg-selected-category-bg text-basic-blue' : 'bg-light-grey '
                } rounded-16px`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <Button label='Add Project' onSubmit={onSubmit} className='w-full' />
        {err && <div className='text-red-600 text-sm text-center '>{err}</div>}
      </div>
    </div>
  );
};

export default CreateProjectStep1;
