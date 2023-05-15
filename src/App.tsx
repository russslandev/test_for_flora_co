import React, { FC } from 'react';
import CreateProjectPage from './pages/CreateProjectPage';
import { Route, Routes } from 'react-router-dom';
import ProjectListPage from './pages/ProjectListPage';

const App: FC = () => {
  return (
    <div className='font-Space-Grotesk bg-background-dark w-screen h-screen pt-4 px-4 text-white overflow-x-hidden'>
      <Routes>
        <Route path='test_for_flora_co' element={<CreateProjectPage />} />
        <Route path='test_for_flora_co/projects' element={<ProjectListPage />} />
      </Routes>
    </div>
  );
};

export default App;
