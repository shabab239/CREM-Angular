import {Floor} from "../floor/floor.model";

export class Unit {
  id: number;
  name: string;
  size: number;
  price: number;
  type: UnitType;
  status: UnitStatus;
  image: string;
  floor: Floor = new Floor();
  companyId: number;
}

export enum UnitType {
  APARTMENT = 'APARTMENT',
  OFFICE = 'OFFICE',
  SHOP = 'SHOP',
  OTHER = 'OTHER'
}

export enum UnitStatus {
  AVAILABLE = 'AVAILABLE',
  SOLD = 'SOLD',
  RESERVED = 'RESERVED'
}

export const UnitTypeOptions: { value: string, label: string }[] = [
    { value: UnitType[UnitType.APARTMENT], label: 'Apartment' },
    { value: UnitType[UnitType.OFFICE], label: 'Office' },
    { value: UnitType[UnitType.SHOP], label: 'Shop' },
    { value: UnitType[UnitType.OTHER], label: 'Other' }
];

export const UnitStatusOptions: { value: string, label: string }[] = [
    { value: UnitStatus[UnitStatus.AVAILABLE], label: 'Available' },
    { value: UnitStatus[UnitStatus.SOLD], label: 'Sold' },
    { value: UnitStatus[UnitStatus.RESERVED], label: 'Reserved' }
];
