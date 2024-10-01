import {Building} from "../building/building.model";
import {Floor} from "../floor/floor.model";
import {Unit} from "../unit/unit.model";
import {RawMaterial} from "../raw-material/raw-material.model";
import {Worker} from "../../worker/worker.model";

export class ConstructionStage {
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
    status: StageStatus;
    building: Building = new Building();
    floor: Floor = new Floor();
    unit: Unit = new Unit();
    rawMaterials: RawMaterial[];
    workers: Worker[];
    companyId: number;
}

export enum StageStatus {
    NOT_STARTED = 'NOT_STARTED',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED'
}

export const StageStatusOptions = [
    { value: StageStatus.NOT_STARTED, label: 'Not Started' },
    { value: StageStatus.IN_PROGRESS, label: 'In Progress' },
    { value: StageStatus.COMPLETED, label: 'Completed' }
];
