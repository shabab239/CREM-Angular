import {Company} from "./company.model";

export class User {
    id: number;
    name: string;
    cell: string;
    email: string;
    gender: string;
    address: string;
    avatar: string;
    dateOfBirth: Date;
    joiningDate: Date;
    bloodGroup: string;
    status: string;
    role!: Role;
    company: Company = new Company();
}

export enum Role {
    ADMIN,
    EMPLOYEE,
    CUSTOMER,
    OWNER
}