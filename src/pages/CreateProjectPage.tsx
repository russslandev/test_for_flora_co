import React, { FC, useEffect, useState } from 'react';
import CreateProjectStep1 from '../components/CreateProjectStep1';
import CreateProjectStep2 from '../components/CreateProjectStep2';
import CreateProjectStep3 from '../components/CreateProjectStep3';
import { IProjectData } from '../types';
import { defaultProjectData } from '../constants';
import MobileProgressBar from '../components/uiComponents/MobileProgressBar';
import DesktopProgressBar from '../components/uiComponents/DesktopProgressBar';
import { Link } from 'react-router-dom';

const CreateProjectPage: FC = () => {
  const [projectData, setProjectData] = useState<IProjectData>(defaultProjectData);
  const [createProjectStep, setCreateProjectStep] = useState(0);

  const renderCreateProjectStep = () => {
    const CreateProjectSteps = [
      <CreateProjectStep1 setCreateProjectStep={setCreateProjectStep} projectData={projectData} setProjectData={setProjectData} />,
      <CreateProjectStep2 setCreateProjectStep={setCreateProjectStep} projectData={projectData} setProjectData={setProjectData} />,
      <CreateProjectStep3 setCreateProjectStep={setCreateProjectStep} projectData={projectData} setProjectData={setProjectData} />,
    ];
    return CreateProjectSteps[createProjectStep];
  };

  return (
    <div className='flex items-start'>
        {window.innerWidth >= 900 && <DesktopProgressBar createProjectStep={createProjectStep}/>}
      <div className={window.innerWidth >= 900 ? 'px-16 pt-24' : ''}>
        <Link to='/test_for_flora_co/projects'>
          <div className='text-end text-basic-blue'>List of Projects</div>
        </Link>
        {window.innerWidth < 900 && <MobileProgressBar createProjectStep={createProjectStep}/>}
        {renderCreateProjectStep()}
      </div>
    </div>
  );
};

export default CreateProjectPage;
