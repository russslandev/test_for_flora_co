import React, { FC } from 'react';
import { IProjectData } from '../types';
import { Link } from 'react-router-dom';

const ProjectListPage:FC = () => {
  const projects: IProjectData[] | null = JSON.parse(localStorage.getItem('projects') as string);
  return projects?.length ? (
    <div>
      <Link to='/test_for_flora_co'>
        <div className='text-end text-basic-blue mb-4'>Create Project</div>
      </Link>
      {projects.map((project) => (
        <div
          key={Math.random()}
          className={`flex mb-6 p-4 w-full border-[1px] border-border-grey rounded-10px ${window.innerWidth >= 900 ? '' : 'flex-col'}`}
        >
          <div className={`border-border-grey ${window.innerWidth >= 900 ? 'w-2/5 pl-16 ml-16 border-l-[1px]' : 'pb-4 border-b-[1px]'}`}>
            <div>Name: {project.projectName}</div>
            <div>URL: alphaguilty.io/{project.projectUrl}</div>
            <div>Category: {project.selectedCategory}</div>
            <div>Goal: {project.selectedGoal}</div>
          </div>
          <div className={`border-border-grey ${window.innerWidth >= 900 ? 'pl-16 ml-16 border-l-[1px]' : 'pt-4 text-end'}`}>
            <div>Workers: {project.workersAmount}</div>
            <div>Launch: {project.launch}</div>
            <div>Contact email: {project.contactEmail}</div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <>
      <div className=' text-3.5xl text-center mt-20 mb-4'>You don't have any projects</div>
      <Link to='/test_for_flora_co'>
        <div className='text-center text-basic-blue'>Create your first project</div>
      </Link>
    </>
  );
};

export default ProjectListPage;
