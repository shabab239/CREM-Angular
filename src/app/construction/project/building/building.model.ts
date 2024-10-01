
import { Project } from '../project.model';

export class Building {
    id: number;
    name: string;
    type: BuildingType;
    project: Project = new Project();
    companyId: number;
}

export enum BuildingType {
    RESIDENTIAL = 'RESIDENTIAL',
    COMMERCIAL = 'COMMERCIAL',
    MIXED_USE = 'MIXED_USE'
}

export const BuildingTypeOptions: { value: string, label: string }[] = [
    {value: BuildingType[BuildingType.RESIDENTIAL], label: 'Residential'},
    {value: BuildingType[BuildingType.COMMERCIAL], label: 'Commercial'},
    {value: BuildingType[BuildingType.MIXED_USE], label: 'Mixed Use'}
];
