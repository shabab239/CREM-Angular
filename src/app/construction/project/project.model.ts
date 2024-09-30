import {User} from "../../authentication/model/user.model";

export class Project {
    id: number;
    name: string;
    location: string;
    startDate: Date;
    endDate: Date;
    budget: number;
    status: ProjectStatus;
    description: string;
    manager: User = new User();
    teamMembers: User[] = [];
    companyId: number;
}

export enum ProjectStatus {
    PLANNING,
    IN_PROGRESS,
    COMPLETED
}

export const ProjectStatusOptions: { value: string, label: string }[] = [
    {value: ProjectStatus[ProjectStatus.PLANNING], label: 'Planning'},
    {value: ProjectStatus[ProjectStatus.IN_PROGRESS], label: 'In Progress'},
    {value: ProjectStatus[ProjectStatus.COMPLETED], label: 'Completed'}
];
