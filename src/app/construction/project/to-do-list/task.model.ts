import {User} from "../../../authentication/model/user.model";

export class Task {
    id: number;
    description: string;
    startDate: Date;
    endDate: Date;
    status: Status;
    employees: User[];
}

export enum Status {
    PENDING,
    IN_PROGRESS,
    COMPLETED
}
