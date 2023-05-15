export interface IProjectData {
  projectName: string;
  projectUrl: string;
  selectedCategory: string;
  selectedGoal: string;
  workersAmount: number;
  launch: string;
  contactEmail: string;
}

export interface IProjectStepProps {
  setProjectData: React.Dispatch<React.SetStateAction<IProjectData>>;
  projectData: IProjectData;
  setCreateProjectStep: React.Dispatch<React.SetStateAction<number>>;
}