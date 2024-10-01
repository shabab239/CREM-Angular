export class Worker {
    id: number;
    name: string;
    salary: number;
    cell: string;
    gender: string;
    address: string;
    avatar: string;
    joiningDate: Date;
    bloodGroup: string;
    companyId: number;
}

export const BloodGroupOptions: { value: string, label: string }[] = [
    {value: "A+", label: 'A+'},
    {value: "A-", label: 'A-'},
    {value: "B+", label: 'B+'},
    {value: "B-", label: 'B-'},
    {value: "O+", label: 'O+'},
    {value: "O-", label: 'O-'},
    {value: "AB+", label: 'AB+'},
    {value: "AB-", label: 'AB-'}
];
