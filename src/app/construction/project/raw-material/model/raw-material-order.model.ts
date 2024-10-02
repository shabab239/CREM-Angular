import { RawMaterial } from './raw-material.model';
import {Supplier} from "./supplier.model";

export class RawMaterialOrder {
  id: number;
  quantity: number;
  unitPrice: number;
  orderDate: Date;
  deliveryDate?: Date;
  totalPrice: number;
  status: RawMaterialOrderStatus;
  rawMaterial: RawMaterial = new RawMaterial();
  supplier: Supplier = new Supplier();
  companyId: number;
}

export enum RawMaterialOrderStatus {
  PENDING = 'PENDING',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED'
}

