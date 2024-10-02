import {RawMaterial} from "./raw-material.model";

export class RawMaterialStock {
    id: number;
    quantity: number;
    lastUpdated: Date;
    rawMaterial: RawMaterial = new RawMaterial();
}
