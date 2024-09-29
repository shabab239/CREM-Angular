export class Project {
  id: number;
  name: string;
  location: string;
  startDate: Date;
  endDate: Date;
  budget: number;
  status: ProjectStatus;
  companyId: number;
}

export enum ProjectStatus {
  PLANNING,
  IN_PROGRESS,
  COMPLETED
}
