import {RawMaterialStock} from "./raw-material-stock.model";

export class RawMaterial {
  id: number;
  name: string;
  stock?: RawMaterialStock; //only exists in the frontend
}
