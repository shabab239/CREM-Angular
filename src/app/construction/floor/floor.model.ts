import {Building} from "../building/building.model";


export class Floor {
    id: number;
    name: FloorName;
    building: Building = new Building();
    companyId: number;
}

export enum FloorName {
    BASEMENT = 'BASEMENT',
    GROUND = 'GROUND',
    FIRST = 'FIRST',
    SECOND = 'SECOND',
    THIRD = 'THIRD',
    FOURTH = 'FOURTH',
    FIFTH = 'FIFTH',
    SIXTH = 'SIXTH',
    SEVENTH = 'SEVENTH',
    EIGHTH = 'EIGHTH',
    NINTH = 'NINTH',
    TENTH = 'TENTH',
    ELEVENTH = 'ELEVENTH',
    TWELFTH = 'TWELFTH',
    THIRTEENTH = 'THIRTEENTH',
    FOURTEENTH = 'FOURTEENTH',
    FIFTEENTH = 'FIFTEENTH'
}

export const FloorNameOptions: { value: string, label: string }[] = [
    {value: FloorName[FloorName.BASEMENT], label: 'Basement'},
    {value: FloorName[FloorName.GROUND], label: 'Ground'},
    {value: FloorName[FloorName.FIRST], label: 'First'},
    {value: FloorName[FloorName.SECOND], label: 'Second'},
    {value: FloorName[FloorName.THIRD], label: 'Third'},
    {value: FloorName[FloorName.FOURTH], label: 'Fourth'},
    {value: FloorName[FloorName.FIFTH], label: 'Fifth'},
    {value: FloorName[FloorName.SIXTH], label: 'Sixth'},
    {value: FloorName[FloorName.SEVENTH], label: 'Seventh'},
    {value: FloorName[FloorName.EIGHTH], label: 'Eighth'},
    {value: FloorName[FloorName.NINTH], label: 'Ninth'},
    {value: FloorName[FloorName.TENTH], label: 'Tenth'},
    {value: FloorName[FloorName.ELEVENTH], label: 'Eleventh'},
    {value: FloorName[FloorName.TWELFTH], label: 'Twelfth'},
    {value: FloorName[FloorName.THIRTEENTH], label: 'Thirteenth'},
    {value: FloorName[FloorName.FOURTEENTH], label: 'Fourteenth'},
    {value: FloorName[FloorName.FIFTEENTH], label: 'Fifteenth'}
];
