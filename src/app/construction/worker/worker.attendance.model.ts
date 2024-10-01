import {Worker} from "./worker.model";
import {ConstructionStage} from "../project/stage/stage.model";

export class WorkerAttendance {
    id: number;
    date: Date;
    status: AttendanceStatus;
    worker: Worker = new Worker();
    stage: ConstructionStage = new ConstructionStage();
    companyId: number;
}

export enum AttendanceStatus {
    PRESENT = 'PRESENT',
    ABSENT = 'ABSENT',
    ON_LEAVE = 'ON_LEAVE'
}

export const attendanceStatusOptions: { [key: string]: string } = {
    [AttendanceStatus.PRESENT]: 'Present',
    [AttendanceStatus.ABSENT]: 'Absent',
    [AttendanceStatus.ON_LEAVE]: 'On Leave'
}
