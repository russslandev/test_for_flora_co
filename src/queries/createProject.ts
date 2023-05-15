import { IProjectData } from "../types";

export const createProject = (projectData: IProjectData) => {
  try {
    //There will be fetch for saving data into BE
    const JsonProjects = localStorage.getItem('projects');
    if (!JsonProjects) {
      localStorage.setItem('projects', JSON.stringify([projectData]));
      return;
    }
    const newProjects = [...JSON.parse(JsonProjects), projectData];
    localStorage.setItem('projects', JSON.stringify(newProjects));
  } catch (error) {
    console.log(error)
  }
}